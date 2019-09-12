#import "RNMainBundlePath.h"

@implementation RNMainBundlePath

@synthesize cachedDatabases;

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(get:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSString* bundlePath = [NSBundle mainBundle].bundlePath;
  resolve(bundlePath);
}

@end
