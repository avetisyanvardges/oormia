// import React, {useState} from "react";
// import {CustomText} from "components/Text";
// import ScreenMask from "components/screenMask";
// import {View, Image} from "react-native";
// import {styles} from "./style"
// import {TouchableOpacity} from "react-native-gesture-handler";
// import ImagePicker from 'react-native-image-crop-picker';
// import Input from "components/input";
// import {Formik} from "formik";
// import Button from "components/Button";
// import {validation} from "constants/validations";
// import {normalize} from "assets/RootStyles/normalize";
// import * as yup from "yup";
//
// function UploadPhoto() {
//     const [img, setImg] = useState()
//
//     const onUpload = () => {
//         // ImagePicker.openCamera({
//         //     width: normalize(300),
//         //     height: normalize(400),
//         //     cropping: true
//         // }).then(image => {
//         //     setImg(image?.path)
//         // });
//     }
//
//     return (
//         <ScreenMask
//             style={{
//                 height: '70%',
//                 alignItems: "center",
//             }}
//         >
//             {/*<CustomText values="Finish setting up your account"/>*/}
//             {/*<View style={styles.imgContainer}>*/}
//             {/*    {img ? <Image*/}
//             {/*        style={styles.img}*/}
//             {/*        source={*/}
//             {/*            {*/}
//             {/*                uri: img,*/}
//             {/*                width: normalize(50),*/}
//             {/*                height: normalize(50)*/}
//             {/*            }*/}
//             {/*        }*/}
//             {/*    /> : <View*/}
//             {/*        style={*/}
//             {/*            {*/}
//             {/*                width: 50, height: 50,*/}
//             {/*                backgroundColor: "blue",*/}
//             {/*                borderRadius: 50,*/}
//             {/*                ...styles.img*/}
//             {/*            }*/}
//             {/*        }*/}
//             {/*    >*/}
//             {/*    </View>}*/}
//             {/*    <TouchableOpacity onPress={onUpload}>*/}
//             {/*        <CustomText values="Upload photo"/>*/}
//             {/*    </TouchableOpacity>*/}
//             {/*</View>*/}
//             {/*<Formik*/}
//             {/*    validationSchema={yup.object().shape({*/}
//             {/*        firstName:validation.name,*/}
//             {/*        // password:validation.password*/}
//             {/*    })}*/}
//             {/*    initialValues={{*/}
//             {/*        firstName: "",*/}
//             {/*        number: "",*/}
//             {/*    }}*/}
//             {/*    onSubmit={values => console.log(values)}>*/}
//             {/*    {({*/}
//             {/*          handleChange,*/}
//             {/*          handleBlur,*/}
//             {/*          handleSubmit,*/}
//             {/*          values,*/}
//             {/*          errors,*/}
//             {/*          touched,*/}
//             {/*          isValid,*/}
//             {/*          dirty,*/}
//             {/*      }) => (*/}
//             {/*        <View>*/}
//             {/*            <Input*/}
//             {/*                placeholder="Name"*/}
//             {/*                value={values.firstName}*/}
//             {/*                onChange={handleChange('firstName')}*/}
//             {/*                errorText={values.firstName && errors.firstName}*/}
//             {/*                onBlur={handleBlur('firstName')}*/}
//             {/*            />*/}
//             {/*            <Input*/}
//             {/*                placeholder="Number"*/}
//             {/*                value={values.number}*/}
//             {/*                onChange={handleChange('number')}*/}
//             {/*                errorText={values.number && errors.number}*/}
//             {/*                onBlur={handleBlur('number')}*/}
//             {/*            />*/}
//             {/*            <View*/}
//             {/*                style={*/}
//             {/*                    {*/}
//             {/*                        flexDirection: "row",*/}
//             {/*                        justifyContent: "space-between",*/}
//             {/*                        marginVertical: 40*/}
//             {/*                    }*/}
//             {/*                }*/}
//             {/*            >*/}
//             {/*                <CustomText*/}
//             {/*                    values="Your country"*/}
//             {/*                />*/}
//             {/*                <CustomText*/}
//             {/*                    values="IConRight"*/}
//             {/*                />*/}
//             {/*            </View>*/}
//             {/*            <Button*/}
//             {/*                styleButton={styles.buttonStyle}*/}
//             {/*                textButton="Sign up"*/}
//             {/*                textStyle={styles.buttonTextStyle}*/}
//             {/*                onClick={handleSubmit}*/}
//             {/*                disabled={!(isValid && dirty && img)}*/}
//             {/*            />*/}
//             {/*        </View>*/}
//             {/*    )}*/}
//             {/*</Formik>*/}
//         </ScreenMask>
//     )
// }
//
//
// export default UploadPhoto
