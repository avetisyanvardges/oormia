import React from "react";
import {ScrollView, View} from "react-native";
import Input from "../../../components/input";
import Text from "../../../components/text";
import {styles} from "./style";
import Button from "../../../components/button";
import TextButton from "../../../components/textButton";
import Stroke from "../../../assets/img/svg/stroke/stroke";
import {Formik} from 'formik';
import {validationSchema} from '../../../services/ValidationSchema'

function SignUp() {

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                firstName: "",
                lastName: "",
                number: "",
                email: '',
                password: "",
                confirmPassword: ""
            }}
            onSubmit={values => console.log(values)}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <Text text="SIgn Up" style={styles.textStyle}/>
                        <Input placeholder="First Name *" value={values.firstName} onChange={handleChange("firstName")}
                               errorText={touched.firstName && errors.firstName} onBlur={handleBlur("firstname")}/>
                        <Input placeholder="Last Name *" value={values.lastName} onChange={handleChange("lastName")}
                               errorText={touched.lastName && errors.lastName} onBlur={handleBlur("lastName")}/>
                        <Input placeholder="Number *" value={values.number} onChange={handleChange("number")}
                               errorText={touched.number && errors.number} onBlur={handleBlur("number")}/>
                        <Input placeholder="Email *" value={values.email} onChange={handleChange("email")}
                               errorText={touched.email && errors.email} onBlur={handleBlur("email")}/>
                        <Input placeholder="Password *" value={values.password} onChange={handleChange("password")}
                               errorText={touched.password && errors.password} onBlur={handleBlur("password")}/>
                        <View style={styles.bottomContainer}>
                            {/*<TextButton icon={<Stroke/>} text="I agree with the Terms of Servise & Privacy Policy"  textStyle={styles.textButtonText} onClick={()=>Alert.alert("hay")}/>*/}
                            <Button  styleButton={styles.buttonStyle} textButton="Join us" textStyle={styles.buttonTextStyle} onClick={handleSubmit}/>
                            <View style={styles.signInTextContainer}>
                                <TextButton text="Already haven an account?"  textStyle={styles.textButtonText} onClick={()=>console.log("hay")}/>
                                <TextButton text="Sign in"  textStyle={styles.signInText} buttonStyle={styles.signInButton} onClick={()=>console.log("hay")}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )}
        </Formik>
    )
}


export default SignUp

