function setup() {

	createCanvas(2000, 4000)
	angleMode(DEGREES)
	strokeWeight(2)

//left wall, red
	stroke(0, 0, 0)
	strokeWeight(2)
	fill(198, 48, 31)
	quad(0, 0, 140, 75, 142, 286, 0, 366);
//middle wall, red
	stroke(0, 0, 0)
	strokeWeight(2)
	fill(198, 48, 31)
	quad(140, 75, 795, 75, 795, 286, 142, 286);
//right wall, red
	stroke(0, 0, 0)
	strokeWeight(2)
	fill(198, 48, 31)
	quad(795, 75, 1234, 0, 1234, 349, 795, 286);
//green wall
    stroke(0, 0, 0)
	strokeWeight(1)
	fill(96, 175, 23)
	quad(0, 0, 140, 75, 795, 75, 1234, 0);
//brown wall under clock
	stroke(0, 0, 0)
	strokeWeight(1)
	fill(60, 8, 15)
	quad(341, 0, 341, 150, 513, 150, 513, 0);
//green 'paint' under clock
	stroke(96, 175, 23)
	strokeWeight(4)
	line(373, 92, 471, 92)
	line(362, 116, 491, 116)
	line(380, 132, 494, 132)
	line(501, 103, 385, 103)
	line(397, 80, 489, 80)
//beige under wall left
	stroke(0, 0, 0)
	strokeWeight(1)
	fill(215, 121, 40)
	quad(0, 366, 142, 286, 142, 422, 0, 515);
//beige under wall center
	stroke(0, 0, 0)
	fill(215, 121, 40)
	quad(142, 286, 795, 286, 795, 422, 142, 422);
//beige under wall right
	stroke(0, 0, 0)
	fill(215, 121, 40)
	quad(795, 286, 1234, 349, 1234, 513, 795, 422);
//floor
	beginShape()
	noStroke()
	fill(231, 185, 30)
	vertex(0, 516)
	vertex(142, 423)
	vertex(795, 423)
	vertex(1234, 514)
	vertex(1234, 1138)
	vertex(0, 1138)
	endShape()

	stroke(240, 190, 35)
	strokeWeight(8)
	line(142, 428, 274, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(108, 450, 228, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(73, 472, 179, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(38, 495, 134, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(6, 517, 87, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(0, 732, 41, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(187, 426, 328, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(237, 428, 385, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(290, 427, 445, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(349, 427, 516, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(406, 427, 578, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(461, 427, 641, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(323, 427, 481, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(485, 427, 671, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(529, 427, 715, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(591, 427, 774, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(645, 427, 828, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(700, 427, 893, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(777, 427, 975, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(750, 427, 950, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(830, 440, 1030, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(900, 450, 1100, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(940, 460, 1140, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(995, 470, 1195, 1134)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(1050, 480, 1230, 1075)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(1096, 490, 1230, 940)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(1150, 500, 1230, 754)

	stroke(240, 190, 35)
	strokeWeight(8)
	line(1188, 510, 1230, 646)

	stroke(199, 126, 11)
	strokeWeight(4)
	line(245, 620, 340, 1074)

	stroke(199, 126, 11)
	strokeWeight(4)
	line(481, 550, 543, 795)

	stroke(199, 126, 11)
	strokeWeight(4)
	line(970, 895, 1029, 1094)

	stroke(199, 126, 11)
	strokeWeight(4)
	line(32, 540, 98, 957)

	stroke(199, 126, 11)
	strokeWeight(4)
	line(1112, 514, 1189, 774)

	stroke(199, 126, 11)
	strokeWeight(4)
	line(730, 1003, 765, 1133)

	stroke(199, 126, 11)
	strokeWeight(4)
	line(269, 446, 318, 669)

	stroke(199, 126, 11)
	strokeWeight(4)
	line(766, 752, 809, 914)

//lamp one
	noStroke()
	fill(253, 199, 49)
	ellipse(192, 132, 60, 60)
//string to ceiling 
	stroke(0, 0, 0)
	strokeWeight(3)
	line(192, 77, 192, 3)
//arcs
	noFill()
	strokeWeight(2)
	stroke(253, 199, 49)
	ellipse(192, 132, 75, 75)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(192, 132, 80, 80)
	strokeWeight(3)
	stroke(253, 199, 49)
	ellipse(192, 132, 87, 87)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(192, 132, 96, 96)
	strokeWeight(3)
	stroke(253, 199, 49)
	ellipse(192, 132, 103, 103)
	strokeWeight(2)
	stroke(253, 199, 49)
	ellipse(192, 132, 110, 110)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(192, 132, 112, 112)
//lamp 1 top
	noStroke()
	fill(253, 199, 49)
	ellipse(192, 88, 20, 20)
//lamp two
	noStroke()
	fill(253, 199, 49)
	ellipse(803, 159, 60, 60)
//lamp 2 top
	noStroke()
	fill(253, 199, 49)
	ellipse(803, 115, 20, 20)
//string to ceiling 
	stroke(0, 0, 0)
	strokeWeight(3)
	line(803, 0, 803, 103)
//arcs
	noFill()
	strokeWeight(2)
	stroke(253, 199, 49)
	ellipse(803, 159, 75, 75)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(803, 159, 80, 80)
	strokeWeight(3)
	stroke(253, 199, 49)
	ellipse(803, 159, 87, 87)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(803, 159, 96, 96)
	strokeWeight(3)
	stroke(253, 199, 49)
	ellipse(803, 159, 103, 103)
	strokeWeight(2)
	stroke(253, 199, 49)
	ellipse(803, 159, 110, 110)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(803, 159, 112, 112)
//lamp three
	noStroke()
	fill(253, 199, 49)
	ellipse(1106, 77, 60, 60)
//lamp 3 top
	noStroke()
	fill(253, 199, 49)
	ellipse(1106, 33, 20, 20)
//string to ceiling 
	stroke(0, 0, 0)
	strokeWeight(3)
	line(1106, 22, 1106, 0)
//arcs
	noFill()
	strokeWeight(2)
	stroke(253, 199, 49)
	ellipse(1106, 77, 75, 75)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(1106, 77, 80, 80)
	strokeWeight(3)
	stroke(253, 199, 49)
	ellipse(1106, 77, 87, 87)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(1106, 77, 96, 96)
	strokeWeight(3)
	stroke(253, 199, 49)
	ellipse(1106, 77, 103, 103)
	strokeWeight(2)
	stroke(253, 199, 49)
	ellipse(1106, 77, 110, 110)
	strokeWeight(1)
	stroke(253, 199, 49)
	ellipse(1106, 77, 112, 112)
//clock outline
	stroke(77, 10, 4)
	fill(77, 10, 4)
	ellipse(435, 128, 80, 90)
//clock center
	stroke(77, 10, 4)
	fill(238, 230, 61)
	ellipse(435, 128, 50, 50)
//clock hands
	stroke(0)
	strokeWeight(3)
	line(435, 128, 443, 113)
	line(435, 128, 453, 127)
	strokeWeight(8)
	point(435, 128)

//pool table legs
//left
	stroke(80, 15, 10)
	strokeWeight(2)
	fill(155, 72, 11)
	ellipse(575, 525, 40, 30)

	fill(155, 72, 11)
	ellipse(575, 547, 20, 20)

	fill(155, 72, 11)
	ellipse(575, 563, 10, 10)
//center
	stroke(80, 15, 10)
	strokeWeight(2)
	fill(155, 72, 11)
	ellipse(856, 745, 40, 30)

	fill(155, 72, 11)
	ellipse(856, 766, 20, 20)

	fill(155, 72, 11)
	ellipse(856, 782, 10, 10)
//right
	stroke(80, 15, 10)
	strokeWeight(2)
	fill(155, 72, 11)
	ellipse(1022, 588, 40, 30)

	fill(155, 72, 11)
	ellipse(1022, 608, 20, 20)

	fill(155, 72, 11)
	ellipse(1022, 625, 10, 10)
//bar
	noStroke()
	fill(185, 195, 44)
	quad(381, 286, 590, 286, 590, 420, 381, 420);
	fill(155, 175, 24)
	quad(406, 302, 406, 404, 566, 404, 566, 302);
//bottle tops
	stroke(80, 15, 10)
	strokeWeight(2)

	fill(155, 72, 11)
	ellipse(393, 240, 8, 15)
	fill(155, 72, 11)
	ellipse(473, 240, 8, 15)
	fill(155, 72, 11)
	ellipse(408, 240, 8, 15)
	fill(155, 72, 11)
	ellipse(452, 240, 8, 15)
	fill(155, 72, 11)
	ellipse(433, 240, 8, 15)

	fill(155, 72, 11)
	ellipse(580, 240, 8, 15)
	fill(155, 72, 11)
	ellipse(549, 240, 8, 15)
	fill(155, 72, 11)
	ellipse(561, 240, 8, 15)
//bottles
	fill(155, 72, 11)
	ellipse(393, 266, 20, 40)

	fill(155, 72, 11)
	ellipse(473, 266, 20, 40)

	fill(155, 72, 11)
	ellipse(408, 266, 20, 40)

	fill(155, 72, 11)
	ellipse(452, 266, 20, 40)

	fill(155, 72, 11)
	ellipse(433, 266, 20, 40)

	fill(155, 72, 11)
	ellipse(580, 266, 20, 40)

	fill(155, 72, 11)
	ellipse(549, 266, 20, 40)

	fill(155, 72, 11)
	ellipse(561, 266, 20, 40)
//flowers
	stroke(80, 15, 10)
	strokeWeight(2)
	fill(247, 199, 29)
	ellipse(510, 255, 50, 60)

	fill(255, 235, 165)
	ellipse(487, 197, 15, 15)
	fill(510, 190, 165)
	ellipse(515, 206, 15, 15)
	fill(255, 235, 165)
	ellipse(528, 209, 15, 15)
	fill(255, 235, 165)
	ellipse(524, 195, 15, 15)
	fill(255, 235, 165)
	ellipse(502, 220, 15, 15)

	fill(255, 235, 165)
	ellipse(520, 221, 15, 15)
	fill(510, 190, 165)
	ellipse(487, 221, 15, 15)
	fill(255, 235, 165)
	ellipse(497, 209, 15, 15)
	fill(255, 235, 165)
	ellipse(502, 188, 15, 15)
	fill(255, 235, 165)
	ellipse(539, 223, 15, 15)

	fill(255, 235, 165)
	ellipse(504, 199, 15, 15)
	fill(510, 190, 165)
	ellipse(517, 185, 15, 15)
	fill(255, 235, 165)
	ellipse(539, 195, 15, 15)

//pool table 
	strokeWeight(4)
	stroke(60, 15, 10)
	fill(152, 72, 11)
	quad(533, 426, 540, 455, 856, 700, 856, 675);

	fill(152, 72, 11)
	quad(856, 675, 858, 700, 1035, 537, 1032, 515);

	strokeWeight(1)
	fill(152, 72, 11)
	quad(551, 466, 567, 508, 857, 736, 856, 702);

	fill(152, 72, 11)
	quad(856, 704, 857, 736, 1026, 575, 1031, 543);

//pool table green center
	beginShape()
	strokeWeight(10)
	stroke(168, 95, 26)
	fill(139, 158, 17)
	vertex(518, 406)
	vertex(537, 397)
	vertex(675, 333)
	vertex(1032, 507)
	vertex(856, 667)
	vertex(518, 406)
	endShape()

//cue balls
	noStroke()
	fill(198, 48, 31)
	ellipse(962, 524, 15, 15)

	fill(250, 250, 250)
	ellipse(955, 498, 15, 15)

	fill(250, 250, 250)
	ellipse(934, 519, 15, 15)

	stroke(96, 175, 23)
	strokeWeight(3)
	line(934, 513, 934, 526)

//door
	noStroke()
	fill(255, 220, 34)
	quad(252, 154, 380, 154, 380, 420, 252, 420);
//curtains
	beginShape()
	strokeWeight(3)
	stroke(168, 95, 26)
	fill(180, 107, 30)
	vertex(251, 315)
	vertex(298, 199)
	vertex(334, 181)
	vertex(379, 273)
	vertex(380, 154)
	vertex(252, 154)
	endShape()

//chair

//table
	beginShape()
	strokeWeight(3)
	stroke(168, 95, 26)
	fill(89, 52, 26)
	vertex(154, 437)
	vertex(150, 491)
	vertex(135, 537)
	vertex(217, 537)
	vertex(209, 491)
	vertex(205, 437)
	vertex(179, 440)
	endShape()

	stroke(200, 100, 50)
	fill(233, 238, 156)
	ellipse(179, 409, 80, 65)

//people
	//man by pool
	noStroke()
	fill(253, 159, 96)
	ellipse(947, 284, 35, 50)

	strokeWeight(5)
	stroke(180, 178, 30)
	point(936, 265)
	point(944, 263)
	point(944, 266)
	point(949, 263)
	point(954, 265) 
	point(960, 271) 
	point(958, 264)
	point(934, 268) 
	point(945, 263) 
	point(950, 263) 

}

	function mouseClicked() {
		print(int(mouseX), int(mouseY))

	}