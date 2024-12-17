//Global imports
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//this function used to create responsive dimension
const FindSize = (size: number): number => {
    return parseFloat((size * (width / 375)).toString());
};

export const Sizes = {
    // Font Sizes
    _4 : FindSize(4),
    _5: FindSize(5),
    _6: FindSize(6),
    _7: FindSize(7),
    _8: FindSize(8),
    _10: FindSize(10),
    _11: FindSize(11),
    _12: FindSize(12),
    _13: FindSize(13),
    _14: FindSize(14),
    _15: FindSize(15),
    _16: FindSize(16),
    _18: FindSize(18),
    _20: FindSize(20),
    _22: FindSize(22),
    _24: FindSize(24),
    _25: FindSize(25),
    _26: FindSize(26),
    _28: FindSize(28),
    _30: FindSize(30),
    _32: FindSize(32),
    _35 : FindSize(35),
    _36 : FindSize(36),
    _37: FindSize(37),
    _40: FindSize(40),
    _50: FindSize(50),
    _56: FindSize(56),
    _60: FindSize(60),
    _64 : FindSize(64),
    _45: FindSize(45),
    _48: FindSize(48),
    _80: FindSize(80),
    _94: FindSize(94),
    _112: FindSize(112),
    _125: FindSize(125),
    _182: FindSize(182),
    _227: FindSize(227),
    FindSize,
    width,
    height,
};
