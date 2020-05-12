//
//  ReactNativeBridge.m
//  ReactNativeLoginWithApple
//
//  Created by PRAMOD_PUNCHH on 06/06/19.
//  Copyright © 2019 PRAMOD. All rights reserved.
//

#import "ReactNativeBridge.h"
#import "LoginWithApple.h"

@implementation ReactNativeBridge

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(startAppleLoginProcess:(RCTPromiseResolveBlock )resolve reject:(RCTPromiseRejectBlock )reject)
{
    [[LoginWithApple sharedInstance] initiateLoginProcess:^(NSDictionary * _Nonnull result) {
         resolve(result);
    } errorHandler:^(NSError * _Nonnull error) {
        reject(@"100", @"Error", error);
    }];
}

@end
