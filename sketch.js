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
//lamp three
	noStroke()
	fill(253, 199, 49)
	ellipse(1106, 77, 60, 60)
//lamp 3 top
	noStroke()
	fill(253, 199, 49)
	ellipse(1106, 33, 20, 20)
//clock outline
	stroke(77, 10, 4)
	fill(77, 10, 4)
	ellipse(435, 128, 80, 90)
//clock center
	stroke(77, 10, 4)
	fill(238, 230, 61)
	ellipse(435, 128, 50, 50)

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
	fill(255, 255, 255)
	quad(252, 154, 252, 420, 400, 154, 400, 420);

//chair

//table

//people


}

	function mouseClicked() {
		print(int(mouseX), int(mouseY))

	}