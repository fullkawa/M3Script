try {
	enchant('m3');
}
catch(e) {
	alert(e);
}
describe('m3script', function() {

	describe('Scenario', function() {

		var s = new Scenario();

		it ('consists of sequence', function() {
			expect(s.sequence).toBeDefined();
		});

		it ('has images in scenario', function() {
			expect(s.images).toBeDefined();
		});

		it ('has "baseURL" for images', function() {
			expect(s.baseURL).toBeDefined();
		});

		describe('baseURL', function() {

			it ('is used for URL complement', function() {
				s.baseURL = 'http://m3itfc.appspot.com/';
				s.images = {
					'bg01': 'Bg_512.jpg'
				};
				expect(s.img('bg01').url).toEqual('http://m3itfc.appspot.com/Bg_512.jpg');
			});
		});

		it ('has 999 sequences by default', function() {
			expect(s.MAX_SEQUENCE_NO).toEqual(999);
		});

		it ('can play on player', function() {
			expect(s.start).toBeDefined();
		});
	});

	describe('Character', function() {

		var anna = new Character('anna', {
			baseURL: 'http://m3itfc.appspot.com/figure/anna/',
			images: {
			    '基本': {
			    	img: 'anna_0000.png',  // 標準, デフォルト
			    	shots: {
				    	ws: { baseY: 460, scale: 0.9 }
			    	}
			    }
			}
		});

//		it ('stand on LEFT_EDGE / LEFT / LEFT2 / CENTER / RIGHT2 / RIGHT / RIGHT_EDGE', function() {
//			expect(anna.POSITIONS.length).toEqual(7);
//
//			expect(anna.onLeft).toBeDefined();
//			expect(anna.onLeft2).toBeDefined();
//			expect(anna.onCenter).toBeDefined();
//			expect(anna.onRight2).toBeDefined();
//			expect(anna.onRight).toBeDefined();
//		});

//		it ('can have 5 shots', function() {
//			expect(anna.SHOT_TYPES.length).toEqual(5);
//		});
//
//		it ('is displayed over waist by default', function() {
//			expect(anna.defaultShotType).toEqual('ws');
//		});

//		it ('can add definitions', function() {
//			var def_0000plus = {
//				images: {
//				    '基本': {
//				    	shots: {
//				    		cu: { baseY: 350, scale: 1.4 },
//				    		bs: { baseY: 390, scale: 1.2 },
//				    		ks: { baseY: 640, scale: 0.8 },
//				    		fs: { baseY: 870, scale: 0.7 }
//				    	}
//				    }
//				}
//			};
//			var def_0001 = {
//				baseURL: 'http://m3itfc.appspot.com/figure/anna/',
//				images: {
//				    'にっこり': {
//				    	img: 'anna_0001.png', // にっこり, ふふーん？
//				    	shots: {
//				    		cu: { baseY: 350, scale: 1.4 },
//				    		bs: { baseY: 390, scale: 1.2 },
//					    	ws: { baseY: 460, scale: 0.9 },
//				    		ks: { baseY: 640, scale: 0.8 },
//				    		fs: { baseY: 870, scale: 0.7 }
//				    	}
//				    }
//				}
//			};
//		});
	});

	describe('Player', function() {
		// TODO:
	});

	describe('Layers', function() {
		// TODO:
	});

	describe('Layer', function() {
		// TODO:
	});

	describe('RoundLabel', function() {
		// TODO:
	});

	describe('Message', function() {
		// TODO:
	});

	describe('HistoryBtn', function() {
		// TODO:
	});

	describe('HistoryMsg', function() {
		// TODO:
	});

	describe('Selection', function() {
		// TODO:
	});

	describe('SelOption', function() {
		// TODO:
	});

	describe('Utility Functions', function() {

		it ('can getFullURL', function() {
			var baseURL1 = 'http://www.hoge.com/';
			var baseURL2 = 'http://www.hoge.com';

			var url1 = 'pic.png';
			expect(getFullURL(url1)).toEqual('pic.png');

			expect(getFullURL(url1, baseURL1)).toEqual('http://www.hoge.com/pic.png');

			expect(getFullURL(url1, baseURL2)).toEqual('http://www.hoge.com/pic.png');

			var url2 = '/pic.png';
			expect(getFullURL(url2, baseURL1)).toEqual('http://www.hoge.com/pic.png');

			var url3 = 'http://www.piyo.com/pic.png';
			expect(getFullURL(url3, baseURL1)).toEqual('http://www.piyo.com/pic.png');
		});
	});
});
