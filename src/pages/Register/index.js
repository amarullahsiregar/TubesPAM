import React, {useEffect, useState}from "react";
import {View, Text, ScrollView} from "react-native";
import {Input, Button} from "react-native-elements";
import {useSelector} from "react-redux";
import { colors } from "../../utils";

const Register = () => {
    const reducer1 =  useSelector(state => state.reducer1);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const senData = () => {
        console.log('data dikirim',form);
    }

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
        
    };

    return (
        <View>
            <ScrollView>
                <Text style={{ color: colors.dark }}>
                    Nama    : {reducer1.name}
                </Text>
                <Text style={{ color: colors.dark }}>
                    email   : {reducer1.email}
                </Text>
            </ScrollView>
        </View>
    )
}

export default Register;