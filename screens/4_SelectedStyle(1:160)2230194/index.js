import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa29/af37/f1b6c0461c94ef625fcedfb2e11ece98"
        }}
        style={styles.ImageBackground_1_161}
      />
      <View style={styles.View_1_162} />
      <View style={styles.View_1_163}>
        <View style={styles.View_1_164} />
        <View style={styles.View_1_165}>
          <Text style={styles.Text_1_165}>Auto</Text>
        </View>
      </View>
      <View style={styles.View_1_166}>
        <View style={styles.View_1_167} />
        <View style={styles.View_1_168}>
          <Text style={styles.Text_1_168}>&lt; 0&#39;30 </Text>
        </View>
      </View>
      <View style={styles.View_1_169}>
        <View style={styles.View_1_170} />
        <View style={styles.View_1_171}>
          <Text style={styles.Text_1_171}>0&#39;30 - 1&#39;00 </Text>
        </View>
      </View>
      <View style={styles.View_1_172}>
        <View style={styles.View_1_173} />
        <View style={styles.View_1_174}>
          <Text style={styles.Text_1_174}>Auto</Text>
        </View>
      </View>
      <View style={styles.View_1_175}>
        <View style={styles.View_1_176} />
        <View style={styles.View_1_177}>
          <Text style={styles.Text_1_177}>Slow</Text>
        </View>
      </View>
      <View style={styles.View_1_178}>
        <View style={styles.View_1_179} />
        <View style={styles.View_1_180}>
          <Text style={styles.Text_1_180}>Medium</Text>
        </View>
      </View>
      <View style={styles.View_1_181}>
        <View style={styles.View_1_182} />
        <View style={styles.View_1_183}>
          <Text style={styles.Text_1_183}>Fast</Text>
        </View>
      </View>
      <View style={styles.View_1_184}>
        <View style={styles.View_1_185} />
        <View style={styles.View_1_186}>
          <Text style={styles.Text_1_186}>1</Text>
        </View>
        <View style={styles.View_1_187} />
        <View style={styles.View_1_188}>
          <Text style={styles.Text_1_188}>2</Text>
        </View>
        <View style={styles.View_1_189} />
        <View style={styles.View_1_190}>
          <Text style={styles.Text_1_190}>3</Text>
        </View>
        <View style={styles.View_1_191} />
        <View style={styles.View_1_192} />
        <View style={styles.View_1_193}>
          <Text style={styles.Text_1_193}>4</Text>
        </View>
        <View style={styles.View_1_194}>
          <Text style={styles.Text_1_194}>5</Text>
        </View>
      </View>
      <View style={styles.View_1_195}>
        <View style={styles.View_1_196} />
        <View style={styles.View_1_197}>
          <Text style={styles.Text_1_197}>1&#39;00 - 1&#39;30 </Text>
        </View>
      </View>
      <View style={styles.View_1_198}>
        <View style={styles.View_1_199} />
        <View style={styles.View_1_200}>
          <Text style={styles.Text_1_200}> 2&#39;00 - 2&#39;30 </Text>
        </View>
      </View>
      <View style={styles.View_1_201}>
        <Text style={styles.Text_1_201}>Selected Style</Text>
      </View>
      <View style={styles.View_1_202}>
        <Text style={styles.Text_1_202}>Select a pacing</Text>
      </View>
      <View style={styles.View_1_203}>
        <Text style={styles.Text_1_203}>Select a duration</Text>
      </View>
      <View style={styles.View_1_204}>
        <Text style={styles.Text_1_204}>Number of Compositions</Text>
      </View>
      <View style={styles.View_1_205} />
      <View style={styles.View_1_206} />
      <View style={styles.View_1_207}>
        <Text style={styles.Text_1_207}> Create your track</Text>
      </View>
      <View style={styles.View_1_208}>
        <View style={styles.View_1_209} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a22b/a65c/7734b8bf9612469f37a35be11c98aa53"
          }}
          style={styles.ImageBackground_1_210}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dab/e87f/b90aac5d13eb9210ee18be5e325f89fc"
        }}
        style={styles.ImageBackground_1_213}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_161: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("332.78688524590166%"),
    minHeight: hp("332.78688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_162: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("204.4828821401127%"),
    minHeight: hp("204.4828821401127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("128.30397809138063%"),
    backgroundColor: "rgba(252, 250, 255, 1)",
    borderTopLeftRadius: 95,
    borderTopRightRadius: 95,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_163: {
    width: wp("13.330706108940973%"),
    minWidth: wp("13.330706108940973%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.586675347222222%"),
    top: hp("215.02625512295083%")
  },
  View_1_164: {
    width: wp("13.330706108940973%"),
    minWidth: wp("13.330706108940973%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_165: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.843142361111111%"),
    top: hp("3.551912568305994%")
  },
  Text_1_165: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_166: {
    width: wp("13.330706108940973%"),
    minWidth: wp("13.330706108940973%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.02986111111111%"),
    top: hp("215.02625512295083%")
  },
  View_1_167: {
    width: wp("13.330706108940973%"),
    minWidth: wp("13.330706108940973%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(129, 34, 163, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_168: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7764539930555578%"),
    top: hp("3.551912568305994%")
  },
  Text_1_168: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_169: {
    width: wp("19.68394097222222%"),
    minWidth: wp("19.68394097222222%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.006336805555556%"),
    top: hp("215.02625512295083%")
  },
  View_1_170: {
    width: wp("19.68394097222222%"),
    minWidth: wp("19.68394097222222%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_171: {
    width: wp("17.244444444444447%"),
    minWidth: wp("17.244444444444447%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1753038194444443%"),
    top: hp("3.551912568305994%")
  },
  Text_1_171: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_172: {
    width: wp("13.330706108940973%"),
    minWidth: wp("13.330706108940973%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.713780381944446%"),
    top: hp("179.7699474897541%")
  },
  View_1_173: {
    width: wp("13.330706108940973%"),
    minWidth: wp("13.330706108940973%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(129, 34, 163, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_174: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8431423611111093%"),
    top: hp("3.5519125683060224%")
  },
  Text_1_174: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_175: {
    width: wp("13.330706108940973%"),
    minWidth: wp("13.330706108940973%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.15696614583333%"),
    top: hp("179.7699474897541%")
  },
  View_1_176: {
    width: wp("13.330706108940973%"),
    minWidth: wp("13.330706108940973%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_177: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.843142361111113%"),
    top: hp("3.5519125683060224%")
  },
  Text_1_177: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_178: {
    width: wp("17.379007975260414%"),
    minWidth: wp("17.379007975260414%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.600108506944444%"),
    top: hp("179.7699474897541%")
  },
  View_1_179: {
    width: wp("17.379007975260414%"),
    minWidth: wp("17.379007975260414%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_180: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.20060763888889%"),
    top: hp("3.5519125683060224%")
  },
  Text_1_180: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_181: {
    width: wp("15.714089626736111%"),
    minWidth: wp("15.714089626736111%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.10809461805556%"),
    top: hp("179.7699474897541%")
  },
  View_1_182: {
    width: wp("15.714089626736111%"),
    minWidth: wp("15.714089626736111%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_183: {
    width: wp("7.022222222222223%"),
    minWidth: wp("7.022222222222223%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.345920138888886%"),
    top: hp("3.5519125683060224%")
  },
  Text_1_183: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_184: {
    width: wp("79.28612196180555%"),
    minWidth: wp("79.28612196180555%"),
    height: hp("13.661335595969945%"),
    minHeight: hp("13.661335595969945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.356944444444444%"),
    top: hp("252.82736189378414%")
  },
  View_1_185: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0001334101776251373%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(129, 34, 163, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_186: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.043142361111112%"),
    top: hp("3.5520459784835907%")
  },
  Text_1_186: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_187: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53070746527778%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_188: {
    width: wp("1.9555555555555555%"),
    minWidth: wp("1.9555555555555555%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.21959635416666%"),
    top: hp("3.5519125683060224%")
  },
  Text_1_188: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_189: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06141493055556%"),
    top: hp("0.00006670508884099036%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_190: {
    width: wp("1.9555555555555555%"),
    minWidth: wp("1.9555555555555555%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.75030381944444%"),
    top: hp("3.5519792733948066%")
  },
  Text_1_190: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_191: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.55154079861111%"),
    top: hp("0.00006670508884099036%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_192: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.95277777777778%"),
    top: hp("0.00006670508884099036%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_193: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.151540798611116%"),
    top: hp("3.5519792733948066%")
  },
  Text_1_193: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_194: {
    width: wp("1.9555555555555555%"),
    minWidth: wp("1.9555555555555555%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.64166666666665%"),
    top: hp("3.5519792733948066%")
  },
  Text_1_194: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_195: {
    width: wp("20.46340060763889%"),
    minWidth: wp("20.46340060763889%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.80381944444444%"),
    top: hp("215.02625512295083%")
  },
  View_1_196: {
    width: wp("20.46340060763889%"),
    minWidth: wp("20.46340060763889%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_197: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1428168402777814%"),
    top: hp("3.551912568305994%")
  },
  Text_1_197: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_198: {
    width: wp("20.46340060763889%"),
    minWidth: wp("20.46340060763889%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.37966579861111%"),
    top: hp("215.02625512295083%")
  },
  View_1_199: {
    width: wp("20.46340060763889%"),
    minWidth: wp("20.46340060763889%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_200: {
    width: wp("18.31111111111111%"),
    minWidth: wp("18.31111111111111%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0761501736111114%"),
    top: hp("3.551912568305994%")
  },
  Text_1_200: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_201: {
    width: wp("38.48888888888889%"),
    minWidth: wp("38.48888888888889%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.75555555555556%"),
    top: hp("136.23447105532787%")
  },
  Text_1_201: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 52,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_202: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666666%"),
    top: hp("166.4452724769467%")
  },
  Text_1_202: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_203: {
    width: wp("28.17777777777778%"),
    minWidth: wp("28.17777777777778%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.91111111111111%"),
    top: hp("200.47187179815575%")
  },
  Text_1_203: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_204: {
    width: wp("40.355555555555554%"),
    minWidth: wp("40.355555555555554%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.822222222222223%"),
    top: hp("239.580798539959%")
  },
  Text_1_204: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_205: {
    width: wp("68.14422200520833%"),
    minWidth: wp("68.14422200520833%"),
    height: hp("10.245893301208163%"),
    minHeight: hp("10.245893301208163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.891276041666666%"),
    top: hp("296.7628687457309%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_1_206: {
    width: wp("75.55555555555556%"),
    minWidth: wp("75.55555555555556%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("284.7410108222336%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_1_207: {
    width: wp("45.422222222222224%"),
    minWidth: wp("45.422222222222224%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.182877604166666%"),
    top: hp("291.161775849556%")
  },
  Text_1_207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_208: {
    width: wp("9.218667263454861%"),
    minWidth: wp("9.218667263454861%"),
    height: hp("14.168033704080216%"),
    minHeight: hp("14.168033704080216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.41684027777778%"),
    top: hp("287.9028987363388%")
  },
  View_1_209: {
    width: wp("9.218667263454861%"),
    minWidth: wp("9.218667263454861%"),
    height: hp("14.168033704080216%"),
    minHeight: hp("14.168033704080216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(104, 29, 131, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_210: {
    width: wp("5.777777777777778%"),
    height: hp("8.879781420765028%"),
    top: hp("2.644123014856575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7204427083333371%")
  },
  ImageBackground_1_213: {
    width: wp("5.777777777777778%"),
    height: hp("8.879781420765028%"),
    top: hp("134.8360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8%")
  },
  View_2: { height: 2436 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
