import { Injectable } from "@nestjs/common";
import { DownloadDto } from "./dto/download.dto";

@Injectable()
export class DownloadService {

  constructor() { }

  async downloadFolder(folder: string): Promise<DownloadDto> {
    console.log("downloadFolder: " + folder);

    return undefined;
  }

}
