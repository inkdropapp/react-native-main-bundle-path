
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#import <Foundation/Foundation.h>

#define logDebug

@interface RNMainBundlePath : NSObject <RCTBridgeModule>
@end
  
