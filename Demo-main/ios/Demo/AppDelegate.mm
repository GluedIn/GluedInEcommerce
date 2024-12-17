#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

//- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
//{
//  self.moduleName = @"Demo";
//  // You can add your custom initial props in the dictionary below.
//  // They will be passed down to the ViewController used by React Native.
//  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
//  
//  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                      moduleName:self.moduleName
//                                               initialProperties:nil
//                                                   launchOptions:launchOptions];
//  rootView.backgroundColor = [UIColor whiteColor];
//  
//  UIViewController *rootViewController = [UIViewController new];
//  rootViewController.view = rootView;
//  
//  UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:rootViewController];
//  navigationController.navigationBar.hidden = YES;
//  
//  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//  self.window.rootViewController = navigationController;
//  [self.window makeKeyAndVisible];
//  self.reactNativeViewController = rootViewController;
//  
//  return YES;
//}

- (UIViewController *)currentRootViewController {
  return [UIApplication sharedApplication].delegate.window.rootViewController;
}

//- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
//  // Initialize the React Native root view
//  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
//  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                      moduleName:@"Demo"
//                                               initialProperties:nil
//                                                   launchOptions:launchOptions];
//  
//  rootView.backgroundColor = [UIColor whiteColor];
//
//  UIViewController *rootViewController = [UIViewController new];
//  rootViewController.view = rootView;
//
//  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//  self.window.rootViewController = rootViewController;
//  [self.window makeKeyAndVisible];
//
//  // Fetch the root or top view controller
////  UIViewController *currentVC = [self currentTopViewController];
////  NSLog(@"Current Top View Controller: %@", currentVC);
//
//  return YES;
//}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"Demo";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
