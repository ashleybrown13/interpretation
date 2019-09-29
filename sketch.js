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
	noStroke()
	fill(215, 121, 40)
	quad(0, 366, 142, 286, 142, 422, 0, 515);
//beige under wall center

//beige under wall right

//floor

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

//pool table
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


//chair

//table

//people


}

	function mouseClicked() {
		print(int(mouseX), int(mouseY))

	}