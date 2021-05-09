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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b6e/415d/057ccf23c7c472ae3b96a200a4d511ed"
        }}
        style={styles.ImageBackground_1_252}
      />
      <View style={styles.View_1_253}>
        <Text style={styles.Text_1_253}>Welcome Back!</Text>
      </View>
      <View style={styles.View_1_254}>
        <Text style={styles.Text_1_254}>
          Please login to your account to continue
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91ec/7e66/09eb59d412e899526213abd425f39733"
        }}
        style={styles.ImageBackground_1_255}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35c/e878/0570111477376810829ad76a3d4d7e57"
        }}
        style={styles.ImageBackground_1_256}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a8a/d44b/ff17ff0a4724abd38b7b035cc51f9c3a"
        }}
        style={styles.ImageBackground_1_257}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/436d/9531/1541b0f4db0cd1a88278a3dc0aa8daeb"
        }}
        style={styles.ImageBackground_1_258}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea48/5257/8a7c01a59fecee0ecbcf0d30356d023d"
        }}
        style={styles.ImageBackground_1_259}
      />
      <View style={styles.View_1_260}>
        <Text style={styles.Text_1_260}>Don’t have an account? Create New</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea48/5257/8a7c01a59fecee0ecbcf0d30356d023d"
        }}
        style={styles.ImageBackground_1_261}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1743/f5c5/ac9ceed8e108b7658d2ecd561295dcb1"
        }}
        style={styles.ImageBackground_1_262}
      />
      <View style={styles.View_1_263} />
      <View style={styles.View_1_264}>
        <Text style={styles.Text_1_264}>Email Address</Text>
      </View>
      <View style={styles.View_1_265}>
        <Text style={styles.Text_1_265}>michaeldoe.01@email.com</Text>
      </View>
      <View style={styles.View_1_266}>
        <Text style={styles.Text_1_266}>Password</Text>
      </View>
      <View style={styles.View_1_267}>
        <Text style={styles.Text_1_267}>Enter your password</Text>
      </View>
      <View style={styles.View_1_268}>
        <Text style={styles.Text_1_268}>Log in Now</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd4b/ade3/3f717b50d960658fb85a628f0401e0e6"
        }}
        style={styles.ImageBackground_1_269}
      />
      <View style={styles.View_1_272}>
        <Text style={styles.Text_1_272}>Forgot Password?</Text>
      </View>
      <View style={styles.View_1_273}>
        <Text style={styles.Text_1_273}>Google</Text>
      </View>
      <View style={styles.View_1_274}>
        <Text style={styles.Text_1_274}>Facebook</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd48/603a/9a2c17b1ffd9b4d4206f7f204ba9b7ae"
        }}
        style={styles.ImageBackground_1_275}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74c3/0558/a06bba997cc689908943864251fbf512"
        }}
        style={styles.ImageBackground_1_280}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_252: {
    width: wp("618.4%"),
    minWidth: wp("618.4%"),
    height: hp("332.78688524590166%"),
    minHeight: hp("332.78688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-48.8%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_253: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.02222222222222%"),
    top: hp("86.88524590163934%")
  },
  Text_1_253: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 60,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_254: {
    width: wp("63.288888888888884%"),
    minWidth: wp("63.288888888888884%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("101.91256830601093%")
  },
  Text_1_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_255: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("205.46448087431693%"),
    minHeight: hp("205.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("127.32240437158471%")
  },
  ImageBackground_1_256: {
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
  ImageBackground_1_257: {
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
  ImageBackground_1_258: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("64.75409836065575%"),
    minHeight: hp("64.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.044444444444444%"),
    top: hp("146.448087431694%")
  },
  ImageBackground_1_259: {
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
  View_1_260: {
    width: wp("72.97777777777777%"),
    minWidth: wp("72.97777777777777%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.066666666666666%"),
    top: hp("305.1912568306011%")
  },
  Text_1_260: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_261: {
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
  ImageBackground_1_262: {
    width: wp("4.8%"),
    height: hp("6.0109289617486334%"),
    top: hp("196.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.82222222222222%")
  },
  View_1_263: {
    width: wp("68.88888888888889%"),
    minWidth: wp("68.88888888888889%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%"),
    top: hp("178.68852459016392%"),
    backgroundColor: "rgba(17, 17, 17, 1)"
  },
  View_1_264: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.11111111111111%"),
    top: hp("153.96174863387978%")
  },
  Text_1_264: {
    color: "rgba(93, 23, 118, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_265: {
    width: wp("54.75555555555556%"),
    minWidth: wp("54.75555555555556%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("163.11475409836063%")
  },
  Text_1_265: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_266: {
    width: wp("15.822222222222221%"),
    minWidth: wp("15.822222222222221%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.11111111111111%"),
    top: hp("186.47540983606555%")
  },
  Text_1_266: {
    color: "rgba(93, 23, 118, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_267: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("195.62841530054644%")
  },
  Text_1_267: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_268: {
    width: wp("24.355555555555554%"),
    minWidth: wp("24.355555555555554%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("220.35519125683058%")
  },
  Text_1_268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_269: {
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
  View_1_272: {
    width: wp("36.17777777777778%"),
    minWidth: wp("36.17777777777778%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.17777777777778%"),
    top: hp("246.58469945355193%")
  },
  Text_1_272: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_273: {
    width: wp("14.755555555555555%"),
    minWidth: wp("14.755555555555555%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.84444444444444%"),
    top: hp("272.54098360655735%")
  },
  Text_1_273: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_274: {
    width: wp("19.644444444444446%"),
    minWidth: wp("19.644444444444446%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.37777777777778%"),
    top: hp("272.54098360655735%")
  },
  Text_1_274: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_275: {
    width: wp("5.052444797092013%"),
    height: hp("7.92349622549255%"),
    top: hp("272.54098360655735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.11111111111111%")
  },
  ImageBackground_1_280: {
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
