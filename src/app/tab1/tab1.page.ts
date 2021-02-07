import { Component } from '@angular/core';
import { CaptureService} from '../services/capture.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public captureService : CaptureService) {}

  addPhotoToGallery(){
    this.captureService.addNewToGallery();
  }

}
