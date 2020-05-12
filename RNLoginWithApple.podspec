# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

require 'json'

package = JSON.parse(File.read('./package.json'))

Pod::Spec.new do |spec|
  spec.name           = "RNLoginWithApple"
  spec.version        = package['version']
  spec.summary        = package['description']
  spec.description    = package['description']
  spec.license        = package['license']
  spec.author         = package['author']
  spec.homepage       = "https://github.com/pramodsharma403/react-native-apple-login"
  spec.source         = { :git => "https://github.com/pramodsharma403/react-native-apple-login.git", :tag => spec.version }

  spec.requires_arc   = true
  spec.source_files = 'ios/lib/*.{h,m}'

  # Pinning to the same version as React.podspec.
  spec.platforms = { :ios => "9.0", :tvos => "9.2" }

end
