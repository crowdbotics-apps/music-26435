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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b0f/cafd/7b497acb97cdeecd68717fb58083c74a"
        }}
        style={styles.ImageBackground_1_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f406/3818/a4b760389dc89d35dba1c50ea2704cbe"
        }}
        style={styles.ImageBackground_1_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec10/55b3/2d5f39a2903ef5b02dca9dda7600c306"
        }}
        style={styles.ImageBackground_1_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4387/8e0f/cca459982858466579a6ff239b7feead"
        }}
        style={styles.ImageBackground_1_6}
      />
      <View style={styles.View_1_7} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cf9/79c1/256ce2dd7fb5f5777a6ff0f14709f265"
        }}
        style={styles.ImageBackground_1_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d08/bd9d/920376b504a759ec93c60904fa319562"
        }}
        style={styles.ImageBackground_1_9}
      />
      <View style={styles.View_1_10}>
        <Text style={styles.Text_1_10}>Hello, Ana Good Morning</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9aba/b786/3d697419cba90b9aa077af9f2cd43f19"
        }}
        style={styles.ImageBackground_1_11}
      />
      <View style={styles.View_1_12} />
      <View style={styles.View_1_13} />
      <View style={styles.View_1_14} />
      <View style={styles.View_1_15}>
        <Text style={styles.Text_1_15}>Editor</Text>
      </View>
      <View style={styles.View_1_16}>
        <View style={styles.View_1_17}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f9/47ef/17eb8fee9c4c32b807515377fade6eeb"
            }}
            style={styles.ImageBackground_1_18}
          />
        </View>
      </View>
      <View style={styles.View_1_20}>
        <Text style={styles.Text_1_20}>My Track</Text>
      </View>
      <View style={styles.View_1_21}>
        <View style={styles.View_1_22}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a04c/f070/c99b5c7047b514946174ecbdb6306150"
            }}
            style={styles.ImageBackground_1_23}
          />
        </View>
      </View>
      <View style={styles.View_1_26} />
      <View style={styles.View_1_27} />
      <View style={styles.View_1_28} />
      <View style={styles.View_1_29} />
      <View style={styles.View_1_30}>
        <View style={styles.View_1_31}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffb1/e239/2a20c5ddede346f0be6c2bcbc9443f57"
            }}
            style={styles.ImageBackground_1_32}
          />
          <View style={styles.View_1_33} />
        </View>
      </View>
      <View style={styles.View_1_34}>
        <View style={styles.View_1_35}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f74/89aa/486cd423e929a6cf68537d1f675a135e"
            }}
            style={styles.ImageBackground_1_36}
          />
          <View style={styles.View_1_37} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a77/7a34/3eb8af07b02b30f82b7590ad07df52fa"
        }}
        style={styles.ImageBackground_1_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c335/06cf/d86fe892f825fb11f313a7693f05ce69"
        }}
        style={styles.ImageBackground_1_39}
      />
      <View style={styles.View_1_41}>
        <Text style={styles.Text_1_41}>My Music Album</Text>
      </View>
      <View style={styles.View_1_42}>
        <Text style={styles.Text_1_42}>Apr 20, 2021</Text>
      </View>
      <View style={styles.View_1_43}>
        <Text style={styles.Text_1_43}>Source :</Text>
      </View>
      <View style={styles.View_1_44}>
        <Text style={styles.Text_1_44}>Pop</Text>
      </View>
      <View style={styles.View_1_45}>
        <Text style={styles.Text_1_45}>0:31</Text>
      </View>
      <View style={styles.View_1_46}>
        <Text style={styles.Text_1_46}>0:00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c1c/28cf/1d72d062ef080a7d508d02fbc3c73e65"
        }}
        style={styles.ImageBackground_1_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/428a/8331/5c73aea90bd3cf5945a837726249256d"
        }}
        style={styles.ImageBackground_1_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df61/fcce/ec2e83b416ce8e3bdece3f5cae33af0c"
        }}
        style={styles.ImageBackground_1_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b48/92d5/7c8881fc42adaad71153e76075b30d53"
        }}
        style={styles.ImageBackground_1_52}
      />
      <View style={styles.View_1_53}>
        <View style={styles.View_1_54} />
        <View style={styles.View_1_55} />
        <View style={styles.View_1_56} />
        <View style={styles.View_1_57} />
        <View style={styles.View_1_58}>
          <View style={styles.View_1_59}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffb1/e239/2a20c5ddede346f0be6c2bcbc9443f57"
              }}
              style={styles.ImageBackground_1_60}
            />
            <View style={styles.View_1_61} />
          </View>
        </View>
        <View style={styles.View_1_62}>
          <View style={styles.View_1_63}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f74/89aa/486cd423e929a6cf68537d1f675a135e"
              }}
              style={styles.ImageBackground_1_64}
            />
            <View style={styles.View_1_65} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a77/7a34/3eb8af07b02b30f82b7590ad07df52fa"
          }}
          style={styles.ImageBackground_1_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c335/06cf/d86fe892f825fb11f313a7693f05ce69"
          }}
          style={styles.ImageBackground_1_67}
        />
        <View style={styles.View_1_69}>
          <Text style={styles.Text_1_69}>My Music Album</Text>
        </View>
        <View style={styles.View_1_70}>
          <Text style={styles.Text_1_70}>Apr 20, 2021</Text>
        </View>
        <View style={styles.View_1_71}>
          <Text style={styles.Text_1_71}>Source :</Text>
        </View>
        <View style={styles.View_1_72}>
          <Text style={styles.Text_1_72}>Disco</Text>
        </View>
        <View style={styles.View_1_73}>
          <Text style={styles.Text_1_73}>2:16</Text>
        </View>
        <View style={styles.View_1_74}>
          <Text style={styles.Text_1_74}>0:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c1c/28cf/1d72d062ef080a7d508d02fbc3c73e65"
          }}
          style={styles.ImageBackground_1_75}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/428a/8331/5c73aea90bd3cf5945a837726249256d"
          }}
          style={styles.ImageBackground_1_78}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b8/4a9c/1f727263ffb482ab3034a50492c7d425"
          }}
          style={styles.ImageBackground_1_79}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b48/92d5/7c8881fc42adaad71153e76075b30d53"
          }}
          style={styles.ImageBackground_1_80}
        />
      </View>
      <View style={styles.View_1_81}>
        <View style={styles.View_1_82} />
        <View style={styles.View_1_83} />
        <View style={styles.View_1_84} />
        <View style={styles.View_1_85} />
        <View style={styles.View_1_86}>
          <View style={styles.View_1_87}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffb1/e239/2a20c5ddede346f0be6c2bcbc9443f57"
              }}
              style={styles.ImageBackground_1_88}
            />
            <View style={styles.View_1_89} />
          </View>
        </View>
        <View style={styles.View_1_90}>
          <View style={styles.View_1_91}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f74/89aa/486cd423e929a6cf68537d1f675a135e"
              }}
              style={styles.ImageBackground_1_92}
            />
            <View style={styles.View_1_93} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a77/7a34/3eb8af07b02b30f82b7590ad07df52fa"
          }}
          style={styles.ImageBackground_1_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c335/06cf/d86fe892f825fb11f313a7693f05ce69"
          }}
          style={styles.ImageBackground_1_95}
        />
        <View style={styles.View_1_97}>
          <Text style={styles.Text_1_97}>My Music Album</Text>
        </View>
        <View style={styles.View_1_98}>
          <Text style={styles.Text_1_98}>Apr 20, 2021</Text>
        </View>
        <View style={styles.View_1_99}>
          <Text style={styles.Text_1_99}>Source :</Text>
        </View>
        <View style={styles.View_1_100}>
          <Text style={styles.Text_1_100}>Disco</Text>
        </View>
        <View style={styles.View_1_101}>
          <Text style={styles.Text_1_101}>2:16</Text>
        </View>
        <View style={styles.View_1_102}>
          <Text style={styles.Text_1_102}>0:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c1c/28cf/1d72d062ef080a7d508d02fbc3c73e65"
          }}
          style={styles.ImageBackground_1_103}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/428a/8331/5c73aea90bd3cf5945a837726249256d"
          }}
          style={styles.ImageBackground_1_106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b8/4a9c/1f727263ffb482ab3034a50492c7d425"
          }}
          style={styles.ImageBackground_1_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b48/92d5/7c8881fc42adaad71153e76075b30d53"
          }}
          style={styles.ImageBackground_1_108}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d1/3d3f/159fb509887a427697ecfc592dd8e3f3"
        }}
        style={styles.ImageBackground_1_109}
      />
      <View style={styles.View_1_113} />
      <View style={styles.View_1_114} />
      <View style={styles.View_1_115} />
      <View style={styles.View_1_116}>
        <Text style={styles.Text_1_116}>Create Track</Text>
      </View>
      <View style={styles.View_1_117}>
        <View style={styles.View_1_118} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a22b/a65c/7734b8bf9612469f37a35be11c98aa53"
          }}
          style={styles.ImageBackground_1_119}
        />
      </View>
      <View style={styles.View_1_122}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffb0/1327/d0cd90975302c5adea2b81b1b0f4c776"
          }}
          style={styles.ImageBackground_1_123}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d1/3d3f/159fb509887a427697ecfc592dd8e3f3"
        }}
        style={styles.ImageBackground_1_127}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_3: {
    width: wp("51.05516493055555%"),
    minWidth: wp("51.05516493055555%"),
    height: hp("78.46592970884562%"),
    minHeight: hp("78.46592970884562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.80756293402778%"),
    top: hp("278.5764600409836%")
  },
  ImageBackground_1_4: {
    width: wp("51.05516493055555%"),
    minWidth: wp("51.05516493055555%"),
    height: hp("78.46592970884562%"),
    minHeight: hp("78.46592970884562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.69891493055556%"),
    top: hp("203.9248607197746%")
  },
  ImageBackground_1_5: {
    width: wp("51.05516493055555%"),
    minWidth: wp("51.05516493055555%"),
    height: hp("78.46592970884562%"),
    minHeight: hp("78.46592970884562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.165776909722222%"),
    top: hp("-2.5931186363345287%")
  },
  ImageBackground_1_6: {
    width: wp("51.05516493055555%"),
    minWidth: wp("51.05516493055555%"),
    height: hp("78.46592970884562%"),
    minHeight: hp("78.46592970884562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.48062065972223%"),
    top: hp("-24.389206516286716%")
  },
  View_1_7: {
    width: wp("104.68023003472223%"),
    height: hp("337.20763159579917%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.637109375%"),
    backgroundColor: "rgba(235, 223, 241, 1)"
  },
  ImageBackground_1_8: {
    width: wp("140.43551432291667%"),
    height: hp("360.4629599982923%"),
    top: hp("-8.729761676058743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.643804253472222%")
  },
  ImageBackground_1_9: {
    width: wp("122.54565972222223%"),
    height: hp("331.4415436624829%"),
    top: hp("16.58235143442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.569835069444444%")
  },
  View_1_10: {
    width: wp("37.68888888888889%"),
    minWidth: wp("37.68888888888889%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("22.404371584699454%")
  },
  Text_1_10: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 52,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_11: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.23728298611111%"),
    top: hp("22.540983606557376%")
  },
  View_1_12: {
    width: wp("91.02222222222223%"),
    minWidth: wp("91.02222222222223%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.249435763888889%"),
    top: hp("50%"),
    backgroundColor: "rgba(96, 13, 126, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150
  },
  View_1_13: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.582769097222222%"),
    top: hp("52.04918032786885%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_1_14: {
    width: wp("38.587695312499996%"),
    minWidth: wp("38.587695312499996%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.278054470486111%"),
    top: hp("56.443544815146865%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_1_15: {
    width: wp("9.511111111111111%"),
    minWidth: wp("9.511111111111111%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.11610243055556%"),
    top: hp("57.03551912568307%")
  },
  Text_1_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_16: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.644444444444446%"),
    top: hp("56.830601092896174%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_17: {
    width: wp("4.444444444444445%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_18: {
    width: wp("4.444444444444445%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_20: {
    width: wp("14.48888888888889%"),
    minWidth: wp("14.48888888888889%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.596354166666664%"),
    top: hp("56.9672131147541%")
  },
  Text_1_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_21: {
    width: wp("3.555547417534722%"),
    height: hp("6.830587543425012%"),
    top: hp("57.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.191368272569445%")
  },
  View_1_22: {
    width: wp("3.555547417534722%"),
    height: hp("6.830587543425012%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_23: {
    width: wp("3.555547417534722%"),
    height: hp("6.830587543425012%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_26: {
    width: wp("91.11111111111111%"),
    height: hp("80.85985027375769%"),
    top: hp("78.08397637038934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_27: {
    width: wp("22.95920138888889%"),
    height: hp("35.28565787226776%"),
    top: hp("82.22469475751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.276215277777777%"),
    backgroundColor: "rgba(129, 34, 163, 1)"
  },
  View_1_28: {
    width: wp("20.748788791232638%"),
    minWidth: wp("20.748788791232638%"),
    height: hp("31.888507363574753%"),
    minHeight: hp("31.888507363574753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.381380208333334%"),
    top: hp("84.36859631147541%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_29: {
    flexGrow: 1,
    width: wp("81.29131401909723%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.652777777777779%"),
    top: hp("124.00229198685109%"),
    backgroundColor: "rgba(40, 40, 57, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_1_30: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678880285044185%"),
    minHeight: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.92638888888889%"),
    top: hp("137.97293907957652%")
  },
  View_1_31: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678880285044185%"),
    minHeight: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_32: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7.232400758670328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7231998964736874%")
  },
  View_1_33: {
    width: wp("0.4705882178412543%"),
    minWidth: wp("0.4705882178412543%"),
    height: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.52940538194445%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_1_34: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678881327311199%"),
    minHeight: hp("8.678881327311199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.083506944444444%"),
    top: hp("138.05950560856385%")
  },
  View_1_35: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678881327311199%"),
    minHeight: hp("8.678881327311199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_36: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7.232402843204352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6367459323237199%")
  },
  View_1_37: {
    width: wp("0.4705887264675564%"),
    minWidth: wp("0.4705887264675564%"),
    height: hp("8.678880806177691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  ImageBackground_1_38: {
    width: wp("4%"),
    height: hp("6.830601092896176%"),
    top: hp("138.89707137978144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.652777777777779%")
  },
  ImageBackground_1_39: {
    width: wp("4%"),
    height: hp("5.440511859831263%"),
    top: hp("139.59213840505464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.94409722222221%")
  },
  View_1_41: {
    width: wp("30.844444444444445%"),
    minWidth: wp("30.844444444444445%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.65086805555556%"),
    top: hp("87.8661442324112%")
  },
  Text_1_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_42: {
    width: wp("16.444444444444446%"),
    minWidth: wp("16.444444444444446%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.65086805555556%"),
    top: hp("96.97385694159836%")
  },
  Text_1_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_43: {
    width: wp("11.822222222222223%"),
    minWidth: wp("11.822222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.387586805555557%"),
    top: hp("105.08639643101093%")
  },
  Text_1_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_44: {
    width: wp("5.777777777777778%"),
    minWidth: wp("5.777777777777778%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.64652777777778%"),
    top: hp("105.62350580601093%")
  },
  Text_1_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_45: {
    width: wp("5.511111111111111%"),
    minWidth: wp("5.511111111111111%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.16631944444444%"),
    top: hp("127.42166154371584%")
  },
  Text_1_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_46: {
    width: wp("6.844444444444445%"),
    minWidth: wp("6.844444444444445%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.652777777777779%"),
    top: hp("127.42166154371584%")
  },
  Text_1_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_47: {
    width: wp("4.888888888888889%"),
    height: hp("7.5136612021857925%"),
    top: hp("82.24043715846994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_1_50: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.333333333333336%"),
    top: hp("132.06647028688525%")
  },
  ImageBackground_1_51: {
    width: wp("12.00003662109375%"),
    minWidth: wp("12.00003662109375%"),
    height: hp("18.442679233238344%"),
    minHeight: hp("18.442679233238344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.99995659722222%"),
    top: hp("136.114001664959%")
  },
  ImageBackground_1_52: {
    width: wp("4.233902655707465%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.594135199652776%"),
    top: hp("138.5555413251366%")
  },
  View_1_53: {
    width: wp("91.11111111111111%"),
    minWidth: wp("91.11111111111111%"),
    height: hp("80.85985027375769%"),
    minHeight: hp("80.85985027375769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("167.23546095884564%")
  },
  View_1_54: {
    width: wp("91.11111111111111%"),
    height: hp("80.85985027375769%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_55: {
    width: wp("22.95920138888889%"),
    height: hp("35.28565787226776%"),
    top: hp("4.140718387124309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8317708333333327%"),
    backgroundColor: "rgba(129, 34, 163, 1)"
  },
  View_1_56: {
    width: wp("20.748788791232638%"),
    minWidth: wp("20.748788791232638%"),
    height: hp("31.888507363574753%"),
    minHeight: hp("31.888507363574753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.936935763888889%"),
    top: hp("6.284619941086049%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_57: {
    flexGrow: 1,
    width: wp("81.29131401909723%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.208333333333334%"),
    top: hp("45.91831561646174%"),
    backgroundColor: "rgba(40, 40, 57, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_1_58: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678880285044185%"),
    minHeight: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.481944444444444%"),
    top: hp("59.88896270918718%")
  },
  View_1_59: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678880285044185%"),
    minHeight: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_60: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7.232400758670328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.723199896473659%")
  },
  View_1_61: {
    width: wp("0.4705882178412543%"),
    minWidth: wp("0.4705882178412543%"),
    height: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.52940538194445%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_1_62: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678881327311199%"),
    minHeight: hp("8.678881327311199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.6390625%"),
    top: hp("59.975529238174516%")
  },
  View_1_63: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678881327311199%"),
    minHeight: hp("8.678881327311199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_64: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7.232402843204352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6367501013917547%")
  },
  View_1_65: {
    width: wp("0.4705887264675564%"),
    minWidth: wp("0.4705887264675564%"),
    height: hp("8.678880806177691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  ImageBackground_1_66: {
    width: wp("4%"),
    height: hp("6.830601092896176%"),
    top: hp("60.81309500939207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.208333333333334%")
  },
  ImageBackground_1_67: {
    width: wp("4%"),
    height: hp("5.440511859831263%"),
    top: hp("61.508162034665276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.49965277777777%")
  },
  View_1_69: {
    width: wp("30.844444444444445%"),
    minWidth: wp("30.844444444444445%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.206423611111113%"),
    top: hp("9.78216786202185%")
  },
  Text_1_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_70: {
    width: wp("16.444444444444446%"),
    minWidth: wp("16.444444444444446%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.206423611111113%"),
    top: hp("18.889880571209005%")
  },
  Text_1_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_71: {
    width: wp("11.822222222222223%"),
    minWidth: wp("11.822222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.943142361111114%"),
    top: hp("27.002420060621574%")
  },
  Text_1_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_72: {
    width: wp("8.088888888888889%"),
    minWidth: wp("8.088888888888889%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.202083333333334%"),
    top: hp("27.266305391905718%")
  },
  Text_1_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_73: {
    width: wp("5.2444444444444445%"),
    minWidth: wp("5.2444444444444445%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.721875%"),
    top: hp("49.33768517332649%")
  },
  Text_1_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_74: {
    width: wp("6.844444444444445%"),
    minWidth: wp("6.844444444444445%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.208333333333334%"),
    top: hp("49.33768517332649%")
  },
  Text_1_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_75: {
    width: wp("4.888888888888889%"),
    height: hp("7.5136612021857925%"),
    top: hp("4.156460788080608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.55555555555556%")
  },
  ImageBackground_1_78: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("53.98249391649591%")
  },
  ImageBackground_1_79: {
    width: wp("12.00003662109375%"),
    minWidth: wp("12.00003662109375%"),
    height: hp("18.442679233238344%"),
    minHeight: hp("18.442679233238344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.55551215277778%"),
    top: hp("58.03002529456967%")
  },
  ImageBackground_1_80: {
    width: wp("4.233902655707465%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.14969075520833%"),
    top: hp("60.47156495474724%")
  },
  View_1_81: {
    width: wp("91.11111111111111%"),
    minWidth: wp("91.11111111111111%"),
    height: hp("80.85985027375769%"),
    minHeight: hp("80.85985027375769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("256.3477896601776%")
  },
  View_1_82: {
    width: wp("91.11111111111111%"),
    height: hp("80.85985027375769%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_83: {
    width: wp("22.95920138888889%"),
    height: hp("35.28565787226776%"),
    top: hp("4.140718387124309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8317708333333327%"),
    backgroundColor: "rgba(129, 34, 163, 1)"
  },
  View_1_84: {
    width: wp("20.748788791232638%"),
    minWidth: wp("20.748788791232638%"),
    height: hp("31.888507363574753%"),
    minHeight: hp("31.888507363574753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.936935763888889%"),
    top: hp("6.284619941086078%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_85: {
    flexGrow: 1,
    width: wp("81.29131401909723%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.208333333333334%"),
    top: hp("45.91831561646171%"),
    backgroundColor: "rgba(40, 40, 57, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_1_86: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678880285044185%"),
    minHeight: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.481944444444444%"),
    top: hp("59.888962709187126%")
  },
  View_1_87: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678880285044185%"),
    minHeight: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_88: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7.232400758670328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7231998964737159%")
  },
  View_1_89: {
    width: wp("0.4705882178412543%"),
    minWidth: wp("0.4705882178412543%"),
    height: hp("8.678880285044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.52940538194445%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_1_90: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678881327311199%"),
    minHeight: hp("8.678881327311199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.6390625%"),
    top: hp("59.97552923817449%")
  },
  View_1_91: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8.678881327311199%"),
    minHeight: hp("8.678881327311199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_92: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7.232402843204352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6367501013917831%")
  },
  View_1_93: {
    width: wp("0.4705887264675564%"),
    minWidth: wp("0.4705887264675564%"),
    height: hp("8.678880806177691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  ImageBackground_1_94: {
    width: wp("4%"),
    height: hp("6.830601092896176%"),
    top: hp("60.81309500939204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.208333333333334%")
  },
  ImageBackground_1_95: {
    width: wp("4%"),
    height: hp("5.440511859831263%"),
    top: hp("61.50816203466525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.49965277777777%")
  },
  View_1_97: {
    width: wp("30.844444444444445%"),
    minWidth: wp("30.844444444444445%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.206423611111113%"),
    top: hp("9.782167862021822%")
  },
  Text_1_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_98: {
    width: wp("16.444444444444446%"),
    minWidth: wp("16.444444444444446%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.206423611111113%"),
    top: hp("18.889880571209005%")
  },
  Text_1_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_99: {
    width: wp("11.822222222222223%"),
    minWidth: wp("11.822222222222223%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.943142361111114%"),
    top: hp("27.002420060621546%")
  },
  Text_1_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_100: {
    width: wp("8.088888888888889%"),
    minWidth: wp("8.088888888888889%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.202083333333334%"),
    top: hp("27.539529435621546%")
  },
  Text_1_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_101: {
    width: wp("5.2444444444444445%"),
    minWidth: wp("5.2444444444444445%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.721875%"),
    top: hp("49.33768517332646%")
  },
  Text_1_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_102: {
    width: wp("6.844444444444445%"),
    minWidth: wp("6.844444444444445%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.208333333333334%"),
    top: hp("49.33768517332646%")
  },
  Text_1_102: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_103: {
    width: wp("4.888888888888889%"),
    height: hp("7.5136612021857925%"),
    top: hp("4.156460788080551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.55555555555556%")
  },
  ImageBackground_1_106: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("53.98249391649591%")
  },
  ImageBackground_1_107: {
    width: wp("12.00003662109375%"),
    minWidth: wp("12.00003662109375%"),
    height: hp("18.442679233238344%"),
    minHeight: hp("18.442679233238344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.55551215277778%"),
    top: hp("58.03002529456967%")
  },
  ImageBackground_1_108: {
    width: wp("4.233902655707465%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.14969075520833%"),
    top: hp("60.47156495474724%")
  },
  ImageBackground_1_109: {
    width: wp("13.333333333333334%"),
    height: hp("20.491803278688526%"),
    top: hp("270.3196374445014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.089105902777778%")
  },
  View_1_113: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("116.2137391137295%"),
    minHeight: hp("116.2137391137295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("216.57314613217213%")
  },
  View_1_114: {
    width: wp("68.14422200520833%"),
    minWidth: wp("68.14422200520833%"),
    height: hp("10.245893301208163%"),
    minHeight: hp("10.245893301208163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.891276041666666%"),
    top: hp("299.49510918288934%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_1_115: {
    width: wp("75.55555555555556%"),
    minWidth: wp("75.55555555555556%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: hp("287.4732512593921%"),
    backgroundColor: "rgba(129, 34, 163, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_1_116: {
    width: wp("31.377777777777776%"),
    minWidth: wp("31.377777777777776%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.31108940972222%"),
    top: hp("293.8940162867145%")
  },
  Text_1_116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_117: {
    width: wp("9.218667263454861%"),
    minWidth: wp("9.218667263454861%"),
    height: hp("14.168033704080216%"),
    minHeight: hp("14.168033704080216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.41684027777778%"),
    top: hp("290.6351391734973%")
  },
  View_1_118: {
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
  ImageBackground_1_119: {
    width: wp("5.777777777777778%"),
    height: hp("8.879781420765028%"),
    top: hp("2.6441230148565182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7204427083333371%")
  },
  View_1_122: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.089103190104167%"),
    top: hp("90.06694522711749%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_123: {
    width: wp("13.333344184027778%"),
    height: hp("20.491811616824624%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00000813802083321491%")
  },
  ImageBackground_1_127: {
    width: wp("13.333333333333334%"),
    height: hp("20.491803278688526%"),
    top: hp("179.21842981557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.089105902777778%")
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
