import React from "react";
import { Alert, ScrollView, View } from "react-native";
import Input from "../../components/input";
import Text from "../../components/text";
import { styles } from "./signUpStyle";
import Button from "../../components/button";
import TextButton from "../../components/textButton";
import Stroke from "../../assets/img/svg/stroke/stroke";
import { Formik } from 'formik';
import * as yup from "yup";






function SignUp(){

    const validationSchema = yup.object().shape({
        firstName: yup
          .string()
          .required("Name is a required field")
          .min(3, "Name must be at least 3 characters"),
        lastName: yup
          .string()
          .required("Name is a required field")
          .min(3, "Name must be at least 3 characters"),
        number: yup
          .number()
          .required("Please supply your number"),
        email: yup
          .string()
          .email()
          .required("Email is a required field"),
        password: yup
          .string()
          .required("Please enter your password")
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ),
        // confirmPassword: yup
        //   .string()
        //   .required("Please confirm your password")
        //   .when("password", {
        //     is: password => (password && password.length > 0 ? true : false),
        //     then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
        //   })
      });


    return(
        <Formik
        validationSchema={validationSchema}
        initialValues={{ firstName: "", lastName: "", number:"",  email: '', password:"", confirmPassword:"" }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            
        <ScrollView>
            <View style={styles.container}>
            <Text text="SIgn Up"   style={styles.textStyle}/>
            <Input  placeholder="First Name *" inputStyle={styles.inputStyle} inputContainerStyle={styles.inputContainerStyle} value={values.firstName} onChange={handleChange("firstName")} errorText={true &&  errors.firstName} onBlur={handleBlur("firstname")}/>
            <Input  placeholder="Last Name *" inputStyle={styles.inputStyle} inputContainerStyle={styles.inputContainerStyle} value={values.lastName} onChange={handleChange("lastName")} errorText={touched.lastName && errors.lastName} onBlur={handleBlur("lastName")}/>
            <Input  placeholder="Number *" inputStyle={styles.inputStyle} inputContainerStyle={styles.inputContainerStyle} value={values.number} onChange={handleChange("number")} errorText={touched.number && errors.number} onBlur={handleBlur("number")}/>
            <Input  placeholder="Email *" inputStyle={styles.inputStyle} inputContainerStyle={styles.inputContainerStyle} value={values.email} onChange={handleChange( "email")} errorText={touched.email && errors.email} onBlur={handleBlur("email")}/>
            <Input  placeholder="Password *" inputStyle={styles.inputStyle} inputContainerStyle={styles.inputContainerStyle} value={values.password} onChange={handleChange("password")} errorText={touched.password && errors.password} onBlur={handleBlur("password")}/>
            <Input  placeholder="Confirm Password*" inputStyle={styles.inputStyle} inputContainerStyle={styles.inputContainerStyle} value={values.confirmPassword} onChange={handleChange("confirmPassword")} errorText={touched.confirmPassword && errors.confirmPassword} onBlur={handleBlur("confirmPassword")}/>
            <View style={styles.bottomContainer}>
                <TextButton icon={<Stroke/>} text="I agree with the Terms of Servise & Privacy Policy"  textStyle={styles.textButtonText} onClick={()=>Alert.alert("hay")}/>
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

