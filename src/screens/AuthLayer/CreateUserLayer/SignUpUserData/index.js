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
import Icon from 'components/Svgs';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import Checkbox from "components/Checkbox";
import Country from "screens/AuthLayer/CreateUserLayer/Country";


function UploadPhoto({navigation}) {
    const [img, setImg] = useState();
    const [git, setGit]=useState(false);
    const [country, setCountry]=useState(false);
    const [countryPageIsOpen, setCountryPageIsOpen]=useState(false)

    const onUpload = () => {
        ImagePicker.openCamera({
            width: normalize(300),
            height: normalize(400),
            cropping: true
        }).then(image => {
            setImg(image?.path)
        });
    }

    if(countryPageIsOpen){
        return <Country setCountryPageIsOpen={setCountryPageIsOpen} setCountry={setCountry} />
    }

    return (
        <ScreenMask
            isComplete
            style={{
                alignItems: "center",
            }}
        >
            <View style={styles.titleBlock}>
                <CustomText values="Finish" globalStyle={styles.title}/>
                <CustomText values="Skip" globalStyle={styles.titleSkip}/>
            </View>
            <TouchableOpacity onPress={onUpload} style={styles.imgContainer}>
                {img ? <Image
                    style={styles.img}
                    source={
                        {
                            uri: img,
                            width: normalize(50),
                            height: normalize(50)
                        }
                    }
                /> : <Icon name={ICON_NAMES.ASSETS_SVG.CROP_PHOTO}/>}
                    <CustomText globalStyle={styles.upload} values="Upload photo"/>
            </TouchableOpacity>
            <Formik
                validationSchema={yup.object().shape({
                    firstName: validation.name,
                    nickname: validation.name,
                })}
                initialValues={{
                    firstName: "",
                    nickname:'',
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
                    <View style={styles.body}>
                        <Input
                            placeholder="Name"
                            value={values.firstName}
                            onChange={handleChange('firstName')}
                            errorText={values.firstName && errors.firstName}
                            onBlur={handleBlur('firstName')}
                        />
                        <Input
                            placeholder="@nickname"
                            value={values.nickname}
                            onChange={handleChange('nickname')}
                            errorText={values.nickname && errors.nickname}
                            onBlur={handleBlur('nickname')}
                        />
                        <Input
                            placeholder="Number"
                            value={values.number}
                            onChange={handleChange('number')}
                            errorText={values.number && errors.number}
                            onBlur={handleBlur('number')}
                        />
                        <TouchableOpacity onPress={()=>setGit(!git)} style={styles.btn}>
                            <CustomText globalStyle={styles.btnText} values={'Local guide field'}/>
                            <Checkbox isChecked={git} setChecked={setGit} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setCountryPageIsOpen(true)}  style={{...styles.btn, marginTop:normalize(20)}}>
                            <CustomText globalStyle={styles.btnText} values={'Your country'}/>
                            <View>
                                <CustomText globalStyle={styles.btnCountry} values={'>'}/>
                                <CustomText globalStyle={styles.btnText} values={country}/>
                            </View>
                        </TouchableOpacity>
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
            {/*{countryPageIsOpen?<View style={{*/}
            {/*    flex:1,*/}
            {/*    backgroundColor:'blue',*/}
            {/*    position:'absolute'*/}
            {/*}}>*/}
            {/*</View>:null}*/}
        </ScreenMask>
    )
}


export default UploadPhoto