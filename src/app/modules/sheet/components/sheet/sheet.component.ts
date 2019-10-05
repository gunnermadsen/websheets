import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SheetComponent implements OnInit {

  public start: EventTarget
  public startX: any
  public startWith: any
  public pressed: boolean = false
  public header: string[] = new Array(26).fill(1).map((_: any, index: number) => String.fromCharCode(65 + index))
  
  public rows: number[] = Array.from({ length: 40 })
  constructor(private renderer: Renderer2) {
    console.log(this.header)
  }

  ngOnInit() {
  }

  public triggerColumnResize(event: MouseEvent, element: HTMLTableHeaderCellElement): void {
    this.start = event.target
    this.pressed = true
    this.startX = event.x
    this.startWith = element.clientWidth
    this.resizeColumn(element)
  }


  private resizeColumn(element: HTMLTableHeaderCellElement): void {
    this.renderer.listen('body', 'mousemove', (event: any) => {
      if (this.pressed) {
        let width = this.startWith + (event.x - this.startX)
        let index = element.cellIndex

        // console.log('Width is: ', width)

        this.renderer.setStyle(element, 'min-width', width)
        this.renderer.setStyle(element, 'max-width', width)

        let rows = document.querySelectorAll(`tbody tr td.table-row-cell:nth-child(${index})`)

        // console.log(rows)
        console.log('index is: ', index)
      }
    })

    this.renderer.listen('body', 'mouseup', (event: any) => {
      if (this.pressed) {
        this.pressed = false
      }
    })
  }
}
