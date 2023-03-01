import React, {useState} from "react";
import {CustomText} from "components/Text";
import ScreenMask from "components/screenMask";
import {View, Image, TouchableOpacity} from "react-native";
import {styles} from "./style"
import ImagePicker from 'react-native-image-crop-picker';
import Input from "components/input";
import {Formik} from "formik";
import Button from "components/Button";
import {validation} from "constants/validations";
import {normalize} from "assets/RootStyles/normalize";
import * as yup from "yup";
import {routNames} from "constants/routNames";

function UploadPhoto({navigation}) {
    const [img, setImg] = useState()

    const onUpload = () => {
        ImagePicker.openCamera({
            width: normalize(300),
            height: normalize(400),
            cropping: true
        }).then(image => {
            setImg(image?.path)
        });
    }

    return (
        <ScreenMask
            style={{
                height: '80%',
                alignItems: "center",
            }}
        >
            <CustomText values="Finish setting up your account" globalStyle={styles.title}/>
            <View style={styles.imgContainer}>
                {img ? <Image
                    style={styles.img}
                    source={
                        {
                            uri: img,
                            width: normalize(50),
                            height: normalize(50)
                        }
                    }
                /> : <View
                    style={{
                        ...styles.img,
                        ...styles.imgDef,
                        }}/>}
                <TouchableOpacity onPress={onUpload}>
                    <CustomText values="Upload photo"/>
                </TouchableOpacity>
            </View>
            <Formik
                validationSchema={yup.object().shape({
                    firstName: validation.name,
                })}
                initialValues={{
                    firstName: "",
                    number: "",
                }}
                onSubmit={values => console.log(values)}>
                {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                      isValid,
                      dirty,
                  }) => (
                    <View>
                        <Input
                            title='Name'
                            placeholder="Name"
                            value={values.firstName}
                            onChange={handleChange('firstName')}
                            errorText={values.firstName && errors.firstName}
                            onBlur={handleBlur('firstName')}
                        />
                        <Input
                            title='Number'
                            placeholder="Number"
                            value={values.number}
                            onChange={handleChange('number')}
                            errorText={values.number && errors.number}
                            onBlur={handleBlur('number')}
                        />
                        <View style={styles.btn}>
                            <CustomText values="Your country"/>
                            <CustomText values="IConRight"/>
                        </View>
                        <Button
                            styleButton={styles.buttonStyle}
                            textButton="Save"
                            textStyle={styles.buttonTextStyle}
                            onClick={()=>{
                                handleSubmit();
                                navigation.navigate(routNames.FAVORITE)
                            }}
                            // disabled={!(isValid && dirty && img)}
                        />
                    </View>
                )}
            </Formik>
        </ScreenMask>
    )
}


export default UploadPhoto
