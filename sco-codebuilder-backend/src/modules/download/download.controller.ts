import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { DownloadService } from './download.service';
import { DownloadDto } from './dto/download.dto';

@Controller(`api/v1/download`)
export class DownloadController {

  constructor(private readonly downloadService: DownloadService) {}

  @Get('downloadFolder/:folder')
  async downloadFolder(
    @Res() res: Response, 
    @Param('folder') folder: string,
  ): Promise<Response<DownloadDto, Record<string, DownloadDto>>> {

    const downloadDto: DownloadDto = await this.downloadService.downloadFolder(folder);
    return res.status(200).json(downloadDto);
  }
}