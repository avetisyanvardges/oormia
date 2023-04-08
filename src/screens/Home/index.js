import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, Image, Dimensions, Text, TouchableOpacity, Pressable} from 'react-native';
import data from './data';
import {normalize} from "assets/RootStyles/normalize";
import {styles} from './styles'
import Button from "components/Button";
import Login from "screens/AuthLayer/Login";
import SignUp from "screens/AuthLayer/SignUp";

const LOGIN = "login";
const SIGN_UP = "signUp";

const {width: screenWidth} = Dimensions.get('window');

const Carousel = ({autoScrollInterval = 5000}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [page, setPage] = useState(null)
    const scrollViewRef = useRef();

    useEffect(() => {
        const scrollTimer = setInterval(() => {
            const nextIndex = (activeIndex + 1) % data.length;
            scrollViewRef.current.scrollTo({x: nextIndex * screenWidth, y: 0, animated: true});
            setActiveIndex(nextIndex);
        }, autoScrollInterval);

        return () => clearInterval(scrollTimer);
    }, [activeIndex]);

    const handleScroll = (event) => {
        const slideSize = screenWidth;
        const currentIndex = Math.round(event.nativeEvent.contentOffset.x / slideSize);
        setActiveIndex(currentIndex);
    };

    return (
        <View style={styles.body}>
            <View style={{...styles.imageBlock, height:!page?'100%':'60%'}}>
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={handleScroll}
                >

                    {data.map((item, index) => (
                        <Pressable key={index} onPress={() =>setPage(null)}>
                            <Image key={index} source={item.image}
                                   // style={styles.image}
                                   style={{width: screenWidth,...styles.image}}
                            />
                            <Text style={{...styles.slideTitle, top:page?'70%':'50%'}}>{item.title}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                <View style={styles.step}>
                    {data.map((_, i) => (
                        <View key={i} style={{
                            width: 95 / data.length + '%',
                            ...styles.stepLines,
                            backgroundColor: activeIndex === i ? 'white' : 'gray',
                        }}/>
                    ))}
                </View>
            </View>
            {!page ?
                (<View style={styles.btnBlock}>
                    <Button textButton={"Login"} onClick={() => setPage(LOGIN)} styleButton={styles.btnLogin}
                            textStyle={styles.btnTextLogin}/>
                    <Button textButton={"Sign up"} onClick={() => setPage(SIGN_UP)} styleButton={styles.btnSign}
                            textStyle={styles.btnTextSign}/>
                </View>) :<Login SIGN_UP={SIGN_UP} LOGIN={LOGIN}  page={page} setPage={setPage}/>
            }
        </View>
    );
};


export default Carousel;
