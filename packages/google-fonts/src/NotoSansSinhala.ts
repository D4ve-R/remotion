import {loadFonts} from './base';

export const getInfo = () => ({
	fontFamily: 'Noto Sans Sinhala',
	importName: 'NotoSansSinhala',
	version: 'v26',
	url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900',
	unicodeRanges: {
		sinhala:
			'U+0964-0965, U+0D81-0DF4, U+1CF2, U+200C-200D, U+25CC, U+111E1-111F4',
		'latin-ext':
			'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
		latin:
			'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
	},
	fonts: {
		normal: {
			'100': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
			'200': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
			'300': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
			'400': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
			'500': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
			'600': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
			'700': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
			'800': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
			'900': {
				sinhala:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t19Pqq4-E.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t15_qq4-E.woff2',
				latin:
					'https://fonts.gstatic.com/s/notosanssinhala/v26/yMJ7MJBya43H0SUF_WmcBEEf4rQVO2P524V5N_MxQzQtb-t16fqq.woff2',
			},
		},
	},
});

export const fontFamily = 'Noto Sans Sinhala' as const;

type Variants = {
	normal: {
		weights:
			| '100'
			| '200'
			| '300'
			| '400'
			| '500'
			| '600'
			| '700'
			| '800'
			| '900';
		subsets: 'latin' | 'latin-ext' | 'sinhala';
	};
};

export const loadFont = <T extends keyof Variants>(
	style?: T,
	options?: {
		weights?: Variants[T]['weights'][];
		subsets?: Variants[T]['subsets'][];
		document?: Document;
	},
) => {
	return loadFonts(getInfo(), style, options);
};
