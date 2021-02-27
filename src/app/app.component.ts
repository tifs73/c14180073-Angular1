import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  papan = new Array(5).fill(0).map(() => new Array(5).fill("*"));
  test: String;
  baris = 0;
  kolom = 0;
  counter = 0;
  poin = 0;

  button() {
    this.test = "berhasil";

    if (this.counter % 2 == 0) {
      this.counter++;
      //player 1 genap
      if (this.papan[this.baris - 1][this.kolom - 1] == "*") {
        this.papan[this.baris - 1][this.kolom - 1] = "1";
        //alert(this.papan[this.baris][this.kolom]);
      }
    } else {
      //player2 ganjil
      if (this.papan[this.baris - 1][this.kolom - 1] == "*") {
        this.papan[this.baris - 1][this.kolom - 1] = "0";
        this.counter = 0;
      }
    }

    this.check_win();
  }

  check_win() {
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (this.papan[this.baris - 1][this.kolom - 1] == "1") {
          this.poin++;
        } else {
          this.poin = 0;
        }
      }
      if (this.poin == 4) {
        alert("PLAYER 1 WIN");
      }
    }
  }
}
