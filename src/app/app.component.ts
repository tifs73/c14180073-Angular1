import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public papan = new Array(5).fill(0).map(() => new Array(5).fill("*"));
  test: String;
  baris = 0;
  kolom = 0;
  counter = 0;

  button() {
    var ubah = new Array();
    this.test = "berhasil";
    if (this.counter % 2 == 0) {
      this.counter++;
      if (this.papan[this.baris][this.kolom] == "*") {
        this.papan[this.baris][this.kolom] = "1";
      }
    } else {
      //player2 ganjil
    }
  }
}
