import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ButtonComponent, InputComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';
import {appColors} from '../../constants/appColors';
import {Lock, Sms} from 'iconsax-react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {justifyContent: 'center', alignItems: 'center', padding: 20},
      ]}>
      <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        suffix={false} // Example suffix
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
        // isPassword
      />

      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        suffix={false} // Example suffix
        allowClear
        affix={<Lock size={22} color={appColors.gray} />}
        isPassword
      />
    </View>
  );
};

export default LoginScreen;
