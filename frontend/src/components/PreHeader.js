import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Innercircle from "../../assets/PreHead/InnerCircle.svg";
import Outercircle from "../../assets/PreHead/OuterCircle.svg";
import Sidebar from "../../assets/PreHead/SideBar.svg";
import { FontFamily, FontSize } from "../styles/GlobalStyles";


const PreHead = () => {
  	
  	return (
    		<View style={styles.preHead}>
      			<Text style={[styles.moneyMate]}>MONEY MATE</Text>
      			<Sidebar style={[styles.sidebarIcon, styles.iconLayout]} />
      			<View style={[styles.user, styles.iconLayout,styles.userIconLayout ]}>
                <Outercircle style={styles.outercircleIcon}  />
        				<Innercircle style={[styles.innercircleIcon, styles.iconLayout]} />
                <Text style={styles.z}>Z</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	
  	iconLayout: {
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%",
    		position: "absolute"
  	},

    userIconLayout:{
      top: "1%",
    },
  	moneyMate: {
    		height: "40.06%",
    		width: "44.93%",
    		top: "10%",
    		left: "32.94%",
    		fontSize: 24,
    		color: "#fff"
  	},
  	sidebarIcon: {
    		height: "39.68%",
    		width: "8.47%",
    		top: "7.76%",
    		right: "91.53%",
    		bottom: "52.56%",
    		left: "10%"
  	},
  	outercircleIcon: {
    		top: 15,
        height: 60,
        width: 60,
    		left: 0,
    		position: "absolute"
  	},
  	innercircleIcon: {
      
      top: 20,
      left: 5,
      height: 70,
      width: 100,
      position: "absolute"
  	},
  	z: {
        top: 30,
    		left: 23,
    		fontSize: 24,
    		color: "black",
    		position: "absolute"
  	},
  	user: {
    		top: -13,
    		left: 353,
    		width: 69,
    		height: 85,
    		position: "absolute"
  	},
  	preHead: {
    		flex: 1,
    		width: "100%",
    		height: 62
  	}
});

export default PreHead;
