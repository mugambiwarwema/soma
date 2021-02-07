import { Component } from '@angular/core';
import { CaptureService} from '../services/capture.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public captureService : CaptureService) {}
  async ngOnInit() {
    await this.captureService.loadSaved();
  }
}
