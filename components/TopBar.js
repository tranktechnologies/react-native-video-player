import React from "react";
import PropTypes from "prop-types";

import { View, StyleSheet, Text, Image } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import ToggleIcon from "./ToggleIcon";
import { checkSource } from "./utils";

const backgroundColor = "transparent";

const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center"
  },
  title: {
    flex: 1,
    backgroundColor,
    paddingLeft: 10,
    paddingRight: 35,
    fontSize: 16
  },
  logo: {
    marginLeft: 8,
    height: 25,
    width: 25
  },
  icon: {
    marginLeft: 16,
    fontSize:25
  }
});

const TopBar = props => {
  const { logo, more, back, title, theme, onMorePress, onBackPress } = props;
  return (
    <LinearGradient colors={["rgba(0,0,0,0.75)", "rgba(0,0,0,0)"]} style={styles.container}>
      <View style={styles.row}>
        {back && <Icon style={styles.icon} onPress={onBackPress} name="md-arrow-back" color={theme.back} />}
        {logo && <Image style={styles.logo} resizeMode="contain" {...checkSource(logo)} />}
        <Text style={[styles.title, { color: theme.title }]} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        {more && (
          <ToggleIcon
            style={styles.more}
            onPress={() => onMorePress()}
            paddingRight
            iconOff="more-horiz"
            iconOn="more-horiz"
            theme={theme.more}
            size={25}
          />
        )}
      </View>
    </LinearGradient>
  );
};

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  more: PropTypes.bool.isRequired,
  onMorePress: PropTypes.func.isRequired,
  back: PropTypes.bool.isRequired,
  onBackPress: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default TopBar;
