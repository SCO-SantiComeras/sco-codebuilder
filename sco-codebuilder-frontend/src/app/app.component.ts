import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { ConfigService } from "./shared/config/config.service";
import { WebSocketService } from "./websocket/websocket.service";
import { SpinnerService } from "./shared/spinner/spinner.service";
import { ResolutionService } from './shared/resolution/resolution.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  public title: string;

  @ViewChild('header') header: ElementRef;
  @ViewChild('content') content: ElementRef;
  public contentHeight: number;

  constructor(
    private readonly configService: ConfigService,
    private readonly websocketsService: WebSocketService,
    public readonly spinnerService: SpinnerService,
    public readonly resolutionService: ResolutionService,
  ) {
    if (this.configService.getData(this.configService.configConstants.TITLE)) {
      this.title = this.configService.getData(this.configService.configConstants.TITLE) || 'sco-codebuilder';
    }

    this.websocketsService.connect();
  }

  ngAfterViewInit(): void {
    this.calculateSizes();
  }

  @HostListener('window:resize', ['$event'])
  onResize($event) {
    this.calculateSizes($event.target.innerHeight);
  }

  private calculateSizes(height: number = undefined): void {
    if (!height) {
      height = window.innerHeight;
    }

    this.contentHeight = height - this.header.nativeElement.offsetHeight;
  }
}
