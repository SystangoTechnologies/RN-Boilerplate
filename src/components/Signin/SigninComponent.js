import React, { Component } from 'react';
import {	
	View,
	TextInput,
	ScrollView,
	Keyboard,
	Alert,
	NetInfo,
	Platform,
	NativeModules,
	SafeAreaView,
	TouchableOpacity,
	Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Orientation from 'react-native-orientation';
import showToast from '../../utils/Toast';
import Validators from '../../utils/Validator';
import {getCorrectFontSizeForScreen} from '../../utils/mutiResolution';

export default class SigninComponent extends Component{
	constructor(props) {
		super(props);
		this.state = {
			user: null,      
			email: 'test@test.com',
			password: '1111111',
			isSelected:false
		};
	}
	
	_onFocus(value) {
		this.setState({
			isSelected: value
		});
	}

	_onSubmit() {
		const { email, password } = this.state;
		if (Validators.isEmpty(email)) {
			showToast('Please enter a valid email address.');
			this.email.focus();
		} else if (!Validators.validEmail(email)) {
			showToast('Please enter a valid email address.');
			this.email.focus();
		} else if (Validators.isEmpty(password)) {
			showToast('Please enter a valid password.');
			this.password.focus();
		} else {			
			Keyboard.dismiss;
			this.props.onSigninClicked(email, password);
		}
	}

	render(){
		return(
			<View style={{flex:1,justifyContent:'center'}}>
				<SafeAreaView style={{}}>
					<View style={{height:getCorrectFontSizeForScreen(150),marginHorizontal:getCorrectFontSizeForScreen(10),backgroundColor:'skyblue'}}>
						<View style={{height:getCorrectFontSizeForScreen(50)}}>
							<TextInput
								ref={component => (this.email = component)}
								placeholder={'Email'}
								onFocus={() => this._onFocus('email')}
								underlineColorAndroid="transparent"
								onChangeText={text => this.setState({ email: text })}
								autoCapitalize="none"
								value= {this.state.email}
								clearButtonMode= {'while-editing'}
								style={[
									styles.inputBox,
								]}
							/>
						</View>
						<View style={{height:getCorrectFontSizeForScreen(50)}}>
							<TextInput
								ref={component => (this.password = component)}
								placeholder={'Password'}
								onFocus={() => this._onFocus('password')}
								underlineColorAndroid="transparent"
								onChangeText={text => this.setState({ password: text })}
								value= {this.state.password}
								clearButtonMode= {'while-editing'}
								style={[
									styles.inputBox,											
								]}
								secureTextEntry={true}
							/>
						</View>
						<View style={{height:getCorrectFontSizeForScreen(50),marginTop:getCorrectFontSizeForScreen(0)}}>
							<TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={()=>this._onSubmit()}>
								<Text>
                  Login
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}


SigninComponent.propTypes = {
	navigation: PropTypes.object,
	onSigninClicked: PropTypes.func,
	message: PropTypes.string
};