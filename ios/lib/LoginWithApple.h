//
//  LoginWithApple.h
//  ReactNativeLoginWithApple
//
//  Created by PRAMOD_PUNCHH on 06/06/19.
//  Copyright © 2019 PRAMOD. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AuthenticationServices/AuthenticationServices.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^SuccessBlock)(id);
typedef void (^ErrorBlock)(id);

@interface LoginWithApple : NSObject<ASAuthorizationControllerDelegate, ASAuthorizationControllerPresentationContextProviding>
@property (nonatomic, copy) SuccessBlock successBlock;
@property (nonatomic, copy) ErrorBlock errorBlock;
- (void)initiateLoginProcess:(void (^)(NSDictionary *result))completionHandler errorHandler:(void (^)(NSError *error))errorHandler;
+ (instancetype)sharedInstance;
@end

NS_ASSUME_NONNULL_END
