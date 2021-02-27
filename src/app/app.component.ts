import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  papan = new Array(5).fill(0).map(() => new Array(5).fill("*"));
  baris = 0;
  kolom = 0;
  counter = 0;

  button() {
    if (this.counter % 2 == 0) {
      this.counter++;
      //player 1 genap
      if (this.papan[this.baris - 1][this.kolom - 1] == "*") {
        this.papan[this.baris - 1][this.kolom - 1] = "1";
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
    //HORIZONTAL
    var poin1 = 0;
    var poin2 = 0;
    for (var i = 0; i < 5; i++) {
      poin1 = 0;
      poin2 = 0;
      for (var j = 0; j < 5; j++) {
        if (this.papan[this.baris - 1][i] == "1") {
          poin1++;
        } else if (this.papan[this.baris - 1][i] == "0") {
          poin2++;
        }
        {
          i++;
        }
      }
      if (poin1 == 4) {
        alert("PLAYER 1 WIN");
      } else if (poin2 == 4) {
        alert("PLAYER 2 WIN");
      }
    }

    //VERTIKAL
    for (var i = 0; i < 5; i++) {
      poin1 = 0;
      poin2 = 0;
      for (var j = 0; j < 5; j++) {
        if (this.papan[i][this.kolom - 1] == "1") {
          poin1++;
        } else if (this.papan[i][this.kolom - 1] == "0") {
          poin2++;
        }
        {
          i++;
        }
      }
      if (poin1 == 4) {
        alert("PLAYER 1 WIN");
      } else if (poin2 == 4) {
        alert("PLAYER 2 WIN");
      }
    }
  }
}
