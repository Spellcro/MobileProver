import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MenuBar: React.FC<{}> = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getMenuText = () => {
    return menuOpen ? 'Menu is open' : 'Menu is closed';
  };

  return (
    <View style={styles.headerBar}>
      <Icon
        onPress={openMenu}
        name="menu"
        size={40}
        style={styles.burgerIcon}
        color="#fff"
      />
      <Button title={'       '} onPress={openMenu} color="transparent"></Button>
      <Text style={styles.menuText}>{getMenuText()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#3f51b5',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
  },
  burgerIcon: {
    position: 'absolute',
    top: 4,
    left: 2,
  },
  menuText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
});
