import { StyleSheet,View, Text, Image, Platform } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {Border,FontFamily,FontSize,Color,StyleVariable} from "../../../frontend/constants/GlobalStyles"



export default function friends() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
<View style={styles.friends}>
      <View style={styles.background} />
      <View style={styles.oweGroup}>
        <View style={[styles.list4, styles.listLayout]}>
          <View style={[styles.outerBorder, styles.outerShadowBox]} />
          <Text style={[styles.amount, styles.amountTypo]}>$150</Text>
          <Text style={styles.youoweOrOwes}>You owe</Text>
          <FontAwesome name="user-circle" size={40} color={Color.colorGray_200} style={styles.icon} />
          <Text style={[styles.name, styles.nameLayout]}>Nishan Bhusal</Text>
          
        </View>
        <View style={[styles.list3, styles.listLayout]}>
          <View style={[styles.outerBorder1, styles.outerShadowBox]} />
          <FontAwesome name="user-circle" size={40} color={Color.colorGray_200} style={styles.icon} />
          <Text style={[styles.text, styles.amountTypo]}>$125</Text>
          <Text style={[styles.youoweOrOwes1, styles.namePosition]}>Owes you</Text>
          <Text style={[styles.name1, styles.namePosition]}>Kritian Aryal</Text>
          
        </View>
        <View style={[styles.list2, styles.listLayout]}>
          <View style={[styles.outerBorder2, styles.outerShadowBox]} />
          <Text style={[styles.amount1, styles.amountTypo]}>$250</Text>
          <Text style={[styles.youoweOrOwes2, styles.namePosition]}>{`Owes you `}</Text>
          <FontAwesome name="user-circle" size={40} color={Color.colorGray_200} style={styles.icon} />
          <Text style={[styles.name2, styles.namePosition]}>Suvanaga Dhakal</Text>
          
        </View>
        <View style={[styles.list1, styles.list1Position]}>
        <View style={[styles.outerBorder2, styles.outerShadowBox]} />
          <FontAwesome name="user-circle" size={40} color={Color.colorGray_200} style={styles.icon} />
          <Text style={[styles.amount2, styles.amount2FlexBox]}>$100</Text>
          <Text style={[styles.youoweOrOwed, styles.name3Position1]}>You owe</Text>
          <FontAwesome name="user-circle" size={40} color={Color.colorGray_200} style={styles.icon} />
          <Text style={[styles.name3, styles.name3Position]}>Bishnu Pokaral</Text>
        </View>
      </View>
      <View style={styles.friendsGroupsActivity}>
        <Text style={[styles.groups, styles.groupsTypo]}>GROUP</Text>
        <Text style={styles.friends1}>FRIENDS</Text>
        <Text style={[styles.activity, styles.groupsTypo]}>ACTIVITY</Text>
     </View>
    </View>
    </ParallaxScrollView>
  );
};


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  backgroundChild: {
    position: "absolute",
    top: 4,
    left: 314,
    width: 100,
    height: 100,
    display: "none",
    overflow: "hidden"
    },
    icon: {
      position: "absolute",
      top: 10,
      left: 10,
    },
    background: {
    borderTopLeftRadius: Border.br_28xl,
    borderTopRightRadius: Border.br_28xl,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 626,
    overflow: "hidden"
    },
    listLayout: {
      height: 70,
      left: 0,
      width: 320,
      position: "absolute"
      },
      outerShadowBox: {
      shadowOpacity: 1,
      elevation: 2,
      shadowRadius: 2,
      shadowOffset: {
      width: 0,
      height: 0
      },
      shadowColor: "rgba(0, 0, 0, 0.18)",
      top: 0,
      borderRadius: Border.br_5xs,
      height: 70,
      left: 0,
      width: 320,
      backgroundColor: Color.colorWhite,
      position: "absolute"
      },
      amountTypo: {
      height: 28,
      width: 56,
      textAlign: "left",
      color: Color.colorGray_100,
      fontFamily: FontFamily.abhayaLibreExtraBold,
      fontSize: FontSize.size_xl,
      position: "absolute"
      },
      outerIconLayout1: {
      transform: [
      {
      rotate: "-180deg"
      }
      ],
      maxHeight: "100%",
      maxWidth: "100%",
      overflow: "hidden",
      position: "absolute"
      },
      innerIconLayout1: {
      left: "3.75%",
      right: "81.88%",
      width: "14.38%",
      height: "65.71%",
      transform: [
      {
      rotate: "-180deg"
      }
      ],
      maxHeight: "100%",
      maxWidth: "100%",
      overflow: "hidden",
      position: "absolute"
      },
      nameLayout: {
      width: 99,
      top: 15,
      fontSize: FontSize.size_xs
      },
      initalsClr: {
      color: Color.colorMediumpurple,
      left: "7.81%"
      },
      outerIconLayout: {
      height: 50,
      width: 50,
      left: 10,
      transform: [
      {
      rotate: "-180deg"
      }
      ],
      position: "absolute"
      },
      innerIconLayout: {
      height: 46,
      width: 46,
      left: 12,
      transform: [
      {
      rotate: "-180deg"
      }
      ],
      position: "absolute"
      },
      
      initialsTypo: {
      fontFamily: FontFamily.robotoRegular,
      fontSize: FontSize.size_11xl,
      textAlign: "left",
      position: "absolute"
      },
      namePosition: {
      left: 74,
      fontFamily: FontFamily.latoRegular,
      textAlign: "left",
      position: "absolute"
      },
      initalsLayout: {
      width: "5.94%",
      height: "44.29%",
      fontFamily: FontFamily.robotoRegular,
      fontSize: FontSize.size_11xl
      },
      list1Position: {
      left: "0%",
      right: "0%",
      top: "0%",
      width: "100%"
      },
      amount2FlexBox: {
      textAlign: "left",
      position: "absolute"
      },
      name3Position1: {
      left: "22.81%",
      color: Color.colorGray_200,
      fontFamily: FontFamily.latoRegular
      },
      name3Position: {
      top: "28.57%",
      textAlign: "left",
      position: "absolute"
      },
      groupsTypo: {
      color: Color.colorDimgray,
      fontSize: FontSize.size_sm,
      height: "100%",
      fontFamily: FontFamily.latoRegular,
      textAlign: "left",
      position: "absolute"
      },
      
      outerBorder: {
      borderRadius: Border.br_5xs
      },
      amount: {
      left: 260,
      width: 56,
      top: 18
      },
      youoweOrOwes: {
      top: "60%",
      left: "23.75%",
      color: Color.colorGray_200,
      fontFamily: FontFamily.latoRegular,
      fontSize: FontSize.size_3xs,
      width: "21.25%",
      height: "22.86%",
      textAlign: "left",
      position: "absolute"
      },
      outerEclipseIcon: {
      top: "11.43%",
      left: "3.13%",
      right: "81.25%",
      width: "15.63%",
      height: "71.43%",
      maxHeight: "100%",
      maxWidth: "100%",
      bottom: "17.14%"
      },
      innerEclipseIcon: {
      bottom: "20%",
      top: "14.29%"
      },
      name: {
      height: 31,
      left: 74,
      fontFamily: FontFamily.latoRegular,
      textAlign: "left",
      position: "absolute",
      color: Color.colorGray_200
      },
      initials: {
      height: "30%",
      width: "9.06%",
      top: "25.71%",
      fontFamily: FontFamily.robotoRegular,
      fontSize: FontSize.size_11xl,
      textAlign: "left",
      position: "absolute"
      },
      list4: {
      top: 318
      },
      outerBorder1: {
      borderRadius: Border.br_5xs
      },
      outerEclipse2Icon: {
      top: 9
      },
      innerEclipseIcon1: {
      top: 11
      },
      text: {
      top: 24,
      left: 262
      },
      youoweOrOwes1: {
      top: 41,
      width: 57,
      height: 11,
      fontSize: FontSize.size_3xs
      },
      name1: {
      height: 30,
      width: 99,
      top: 15,
      fontSize: FontSize.size_xs
      },
      initials1: {
      top: 17,
      left: 26,
      color: Color.blue,
      width: 23,
      height: 45
      },
      list3: {
      top: 207
      },
      outerBorder2: {
      borderRadius: Border.br_5xs
      },
      amount1: {
      top: 26,
      left: 260,
      width: 56
      },
      youoweOrOwes2: {
      top: 47,
      width: 83,
      height: 23,
      color: Color.colorGray_200,
      fontSize: FontSize.size_3xs
      },
      outerEclipseIcon1: {
      top: 10
      },
      innerEclipseIcon2: {
      top: 12
      },
      name2: {
      color: "rgba(1, 8, 13, 0.61)",
      width: 90,
      height: 24,
      fontSize: FontSize.size_xs,
      top: 18
      },
      initials2: {
      top: "27.14%",
      left: "8.13%",
      color: "#89c0ee",
      textAlign: "left",
      position: "absolute"
      },
      list2: {
      top: 96
      },
      outerBorderIcon: {
      borderRadius: Border.br_5xs,
      left: "0%",
      right: "0%",
      top: "0%",
      width: "100%",
      maxHeight: "100%",
      maxWidth: "100%",
      bottom: "0%",
      height: "100%"
      },
      amount2: {
      height: "25.71%",
      width: "17.5%",
      top: "37.14%",
      left: "80.94%",
      color: Color.colorGray_100,
      fontFamily: FontFamily.abhayaLibreExtraBold,
      fontSize: FontSize.size_xl,
      textAlign: "left"
      },
      youoweOrOwed: {
      top: "67.14%",
      fontSize: FontSize.size_3xs,
      width: "21.25%",
      height: "22.86%",
      left: "22.81%",
      textAlign: "left",
      position: "absolute"
      },
      outerEclipseIcon2: {
      bottom: "14.29%",
      top: "14.29%",
      left: "3.13%",
      right: "81.25%",
      width: "15.63%",
      height: "71.43%",
      maxHeight: "100%",
      maxWidth: "100%"
      },
      innerEclipseIcon3: {
      top: "17.14%",
      bottom: "17.14%"
      },
      name3: {
      height: "21.43%",
      width: "25.31%",
      left: "22.81%",
      color: Color.colorGray_200,
      fontFamily: FontFamily.latoRegular,
      fontSize: FontSize.size_xs
      },
      initals: {
      width: "5.94%",
      height: "44.29%",
      fontFamily: FontFamily.robotoRegular,
      fontSize: FontSize.size_11xl,
      color: Color.colorMediumpurple,
      left: "7.81%"
      },
      list1: {
      height: "18.04%",
      bottom: "81.96%",
      left: "0%",
      right: "0%",
      position: "absolute"
      },
      oweGroup: {
      top: 109,
      left: 20,
      height: 388,
      width: 320,
      position: "absolute"
      },
      groups: {
      width: "17.33%",
      left: "39.82%",
      top: "0%",
      color: Color.colorDimgray
      },
      friends1: {
      width: "17.63%",
      color: "#06b2f6",
      fontSize: FontSize.size_sm,
      height: "85%",
      fontFamily: FontFamily.latoRegular,
      textAlign: "left",
      left: "0%",
      top: "0%",
      position: "absolute"
      },
      activity: {
      width: "18.84%",
      top: "15%",
      left: "81.16%"
      },
      activeTabIcon: {
      top: 19,
      left: 12,
      transform: [
      {
      rotate: "-180deg"
      }
      ],
      maxHeight: "100%",
      position: "absolute"
      },
      friendsGroupsActivity: {
      height: "3.19%",
      width: "73.6%",
      top: "6.39%",
      right: "12.98%",
      bottom: "90.42%",
      left: "13.42%",
      position: "absolute"
      },
      friends: {
      borderBottomLeftRadius: StyleVariable.radius100,
      flex: 1,
      height: 626,
      transform: [
      {
      rotate: "0deg"
      }
      ],
      width: "100%"
      }
      });