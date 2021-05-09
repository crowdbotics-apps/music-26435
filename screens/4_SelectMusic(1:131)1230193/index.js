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
        style={styles.ImageBackground_1_132}
      />
      <View style={styles.View_1_133} />
      <View style={styles.View_1_134} />
      <View style={styles.View_1_135} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d6/2177/e90298f8c097d2fc40e695ca6a7ec89f"
        }}
        style={styles.ImageBackground_1_136}
      />
      <View style={styles.View_1_141}>
        <Text style={styles.Text_1_141}>Pop</Text>
      </View>
      <View style={styles.View_1_142}>
        <View style={styles.View_1_143}>
          <View style={styles.View_1_144}>
            <View style={styles.View_1_145}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd2/5811/78e7b07dbfb73958596e65af07a03bf6"
                }}
                style={styles.ImageBackground_1_146}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_155}>
          <Text style={styles.Text_1_155}>Disco</Text>
        </View>
      </View>
      <View style={styles.View_1_156}>
        <Text style={styles.Text_1_156}>Select Music</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dab/e87f/b90aac5d13eb9210ee18be5e325f89fc"
        }}
        style={styles.ImageBackground_1_157}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_132: {
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
  View_1_133: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("132.73971640998548%"),
    minHeight: hp("132.73971640998548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("200.04719385032445%"),
    backgroundColor: "rgba(252, 250, 255, 1)",
    borderTopLeftRadius: 95,
    borderTopRightRadius: 95,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_134: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.053342013888887%"),
    top: hp("240.15246115095627%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(129, 34, 163, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_135: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.125911458333334%"),
    top: hp("240.15246115095627%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_1_136: {
    width: wp("8.88888888888889%"),
    height: hp("13.661202185792352%"),
    top: hp("249.5453381147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93888888888889%")
  },
  View_1_141: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.07888454861111%"),
    top: hp("270.65029456967216%")
  },
  Text_1_141: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_142: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("26.979273394808743%"),
    minHeight: hp("26.979273394808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.14813368055556%"),
    top: hp("250.22839822404373%")
  },
  View_1_143: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333997%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_144: {
    width: wp("8.88888888888889%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_145: {
    width: wp("8.88888888888889%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_146: {
    width: wp("8.88888888888889%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_155: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.421896345628426%")
  },
  Text_1_155: {
    color: "rgba(129, 34, 163, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_156: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.15555555555555%"),
    top: hp("208.60655737704917%")
  },
  Text_1_156: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 52,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_157: {
    width: wp("5.777777777777778%"),
    height: hp("8.879781420765028%"),
    top: hp("208.60655737704917%"),
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
