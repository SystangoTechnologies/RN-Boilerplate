//
//  LoginWithApple.m
//  ReactNativeLoginWithApple
//
//  Created by PRAMOD_PUNCHH on 06/06/19.
//  Copyright © 2019 PRAMOD. All rights reserved.
//

#import "LoginWithApple.h"

@implementation LoginWithApple

+ (instancetype)sharedInstance
{
    static LoginWithApple *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[LoginWithApple alloc] init];
        // Do any other initialisation stuff here
    });
    return sharedInstance;
}

- (void)initiateLoginProcess:(void (^)(NSDictionary *result))completionHandler errorHandler:(void (^)(NSError *error))errorHandler {
    self.successBlock = completionHandler;
    self.errorBlock = errorHandler;
    ASAuthorizationAppleIDProvider *appleIDProvider = [[ASAuthorizationAppleIDProvider alloc]init];
    ASAuthorizationAppleIDRequest *request = [appleIDProvider createRequest];
    request.requestedScopes = @[ASAuthorizationScopeFullName, ASAuthorizationScopeEmail];
    
    ASAuthorizationController *authorizationController = [[ASAuthorizationController alloc]initWithAuthorizationRequests:@[request]];
    
    authorizationController.delegate = self;
    authorizationController.presentationContextProvider = self;
    [authorizationController performRequests];
}

#pragma Authorization Delegates

- (void)authorizationController:(ASAuthorizationController *)controller didCompleteWithAuthorization:(ASAuthorization *)authorization {
    NSLog(@"%@",authorization);
    ASAuthorizationAppleIDCredential *appleIDCredential = [authorization credential];
    if(appleIDCredential) {
        NSDictionary *userDetails = @{@"userIdentifier": [appleIDCredential user], @"name" : [appleIDCredential fullName], @"email" : [appleIDCredential email ]};
        self.successBlock(userDetails);
    }
   
}

- (void)authorizationController:(ASAuthorizationController *)controller didCompleteWithError:(NSError *)error {
    NSLog(@"%@",error);
    self.errorBlock(error);
}

#pragma PresentationAnchorForAuthorizationController Delegate

-(ASPresentationAnchor)presentationAnchorForAuthorizationController:(ASAuthorizationController *)controller {
    return  [[UIApplication sharedApplication]delegate].window;
}

@end
