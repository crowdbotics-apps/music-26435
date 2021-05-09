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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a91c/1644/e6c9ca8ebf7fd8b0a6f96489808ad357"
        }}
        style={styles.ImageBackground_1_217}
      />
      <View style={styles.View_1_218}>
        <Text style={styles.Text_1_218}>Sign Up</Text>
      </View>
      <View style={styles.View_1_219}>
        <Text style={styles.Text_1_219}>Follow the easy steps,</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27d0/65d6/5684a6bab72533f7e54889fbab33676d"
        }}
        style={styles.ImageBackground_1_220}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35c/e878/0570111477376810829ad76a3d4d7e57"
        }}
        style={styles.ImageBackground_1_221}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a8a/d44b/ff17ff0a4724abd38b7b035cc51f9c3a"
        }}
        style={styles.ImageBackground_1_222}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd78/df3b/b78be68b64c6de6ad8d38f9442d4b8ff"
        }}
        style={styles.ImageBackground_1_223}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd78/df3b/b78be68b64c6de6ad8d38f9442d4b8ff"
        }}
        style={styles.ImageBackground_1_224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea48/5257/8a7c01a59fecee0ecbcf0d30356d023d"
        }}
        style={styles.ImageBackground_1_225}
      />
      <View style={styles.View_1_226}>
        <Text style={styles.Text_1_226}>Already have an account? Login</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea48/5257/8a7c01a59fecee0ecbcf0d30356d023d"
        }}
        style={styles.ImageBackground_1_227}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1743/f5c5/ac9ceed8e108b7658d2ecd561295dcb1"
        }}
        style={styles.ImageBackground_1_228}
      />
      <View style={styles.View_1_229} />
      <View style={styles.View_1_230} />
      <View style={styles.View_1_231}>
        <Text style={styles.Text_1_231}>Email Address</Text>
      </View>
      <View style={styles.View_1_232}>
        <Text style={styles.Text_1_232}>michaeldoe.01@email.com</Text>
      </View>
      <View style={styles.View_1_233}>
        <Text style={styles.Text_1_233}>Password</Text>
      </View>
      <View style={styles.View_1_234}>
        <Text style={styles.Text_1_234}>Enter your password</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1743/f5c5/ac9ceed8e108b7658d2ecd561295dcb1"
        }}
        style={styles.ImageBackground_1_235}
      />
      <View style={styles.View_1_236}>
        <Text style={styles.Text_1_236}>Confirm Password</Text>
      </View>
      <View style={styles.View_1_237}>
        <Text style={styles.Text_1_237}>Enter your password</Text>
      </View>
      <View style={styles.View_1_238}>
        <Text style={styles.Text_1_238}>Sign in Now</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd4b/ade3/3f717b50d960658fb85a628f0401e0e6"
        }}
        style={styles.ImageBackground_1_239}
      />
      <View style={styles.View_1_242}>
        <Text style={styles.Text_1_242}>Forgot Password?</Text>
      </View>
      <View style={styles.View_1_243}>
        <Text style={styles.Text_1_243}>Google</Text>
      </View>
      <View style={styles.View_1_244}>
        <Text style={styles.Text_1_244}>Facebook</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd48/603a/9a2c17b1ffd9b4d4206f7f204ba9b7ae"
        }}
        style={styles.ImageBackground_1_245}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74c3/0558/a06bba997cc689908943864251fbf512"
        }}
        style={styles.ImageBackground_1_250}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_217: {
    width: wp("215.11111111111111%"),
    minWidth: wp("215.11111111111111%"),
    height: hp("395.62841530054646%"),
    minHeight: hp("395.62841530054646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-48.8%"),
    top: hp("-44.53551912568306%"),
    resizeMode: "cover"
  },
  View_1_218: {
    width: wp("23.288888888888888%"),
    minWidth: wp("23.288888888888888%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.355555555555554%"),
    top: hp("60.92896174863388%")
  },
  Text_1_218: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 60,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_219: {
    width: wp("34.84444444444444%"),
    minWidth: wp("34.84444444444444%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.577777777777776%"),
    top: hp("75.95628415300546%")
  },
  Text_1_219: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_220: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("239.59814186304644%"),
    minHeight: hp("239.59814186304644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.18875172099129%")
  },
  ImageBackground_1_221: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.044444444444444%"),
    top: hp("211.0655737704918%")
  },
  ImageBackground_1_222: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("211.0655737704918%")
  },
  ImageBackground_1_223: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("98.77049180327869%"),
    minHeight: hp("98.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.044444444444444%"),
    top: hp("112.29508196721312%")
  },
  ImageBackground_1_224: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("98.77049180327869%"),
    minHeight: hp("98.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.044444444444444%"),
    top: hp("112.29508196721312%")
  },
  ImageBackground_1_225: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("266.2568306010929%")
  },
  View_1_226: {
    width: wp("65.06666666666666%"),
    minWidth: wp("65.06666666666666%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("305.1912568306011%")
  },
  Text_1_226: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_227: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("266.2568306010929%")
  },
  ImageBackground_1_228: {
    width: wp("4.8%"),
    height: hp("6.0109289617486334%"),
    top: hp("162.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.82222222222222%")
  },
  View_1_229: {
    width: wp("68.88888888888889%"),
    minWidth: wp("68.88888888888889%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%"),
    top: hp("144.53551912568307%"),
    backgroundColor: "rgba(17, 17, 17, 1)"
  },
  View_1_230: {
    width: wp("68.88888888888889%"),
    minWidth: wp("68.88888888888889%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%"),
    top: hp("178.96174863387978%"),
    backgroundColor: "rgba(17, 17, 17, 1)"
  },
  View_1_231: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.11111111111111%"),
    top: hp("119.80874316939891%")
  },
  Text_1_231: {
    color: "rgba(93, 23, 118, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_232: {
    width: wp("54.75555555555556%"),
    minWidth: wp("54.75555555555556%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("128.96174863387978%")
  },
  Text_1_232: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_233: {
    width: wp("15.822222222222221%"),
    minWidth: wp("15.822222222222221%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.11111111111111%"),
    top: hp("152.3224043715847%")
  },
  Text_1_233: {
    color: "rgba(93, 23, 118, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_234: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("161.47540983606555%")
  },
  Text_1_234: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_235: {
    width: wp("4.8%"),
    height: hp("6.0109289617486334%"),
    top: hp("193.98907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.82222222222222%")
  },
  View_1_236: {
    width: wp("29.955555555555556%"),
    minWidth: wp("29.955555555555556%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.11111111111111%"),
    top: hp("183.74316939890713%")
  },
  Text_1_236: {
    color: "rgba(93, 23, 118, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_237: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("192.89617486338798%")
  },
  Text_1_237: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_238: {
    width: wp("26.04444444444444%"),
    minWidth: wp("26.04444444444444%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("220.35519125683058%")
  },
  Text_1_238: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_239: {
    width: wp("5.3817559136284725%"),
    minWidth: wp("5.3817559136284725%"),
    height: hp("6.967396032614786%"),
    minHeight: hp("6.967396032614786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.02222222222223%"),
    top: hp("221.17486338797815%")
  },
  View_1_242: {
    width: wp("36.17777777777778%"),
    minWidth: wp("36.17777777777778%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.17777777777778%"),
    top: hp("246.58469945355193%")
  },
  Text_1_242: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_243: {
    width: wp("14.755555555555555%"),
    minWidth: wp("14.755555555555555%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.84444444444444%"),
    top: hp("272.54098360655735%")
  },
  Text_1_243: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_244: {
    width: wp("19.644444444444446%"),
    minWidth: wp("19.644444444444446%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.37777777777778%"),
    top: hp("272.54098360655735%")
  },
  Text_1_244: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_245: {
    width: wp("5.052444797092013%"),
    height: hp("7.92349622549255%"),
    top: hp("272.54098360655735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.11111111111111%")
  },
  ImageBackground_1_250: {
    width: wp("2.666666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("272.54098360655735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.42222222222222%")
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
