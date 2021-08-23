import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'storybook-tableCard',
  template: ` 
  <div class="list-card">
  <div class="head flex">
    <h2 class="text-header pb-6 font-extralight w-full">
      {{header}}
      <span class="border mt-2 block w-30%"></span>
    </h2>
  </div>
   <div class="grid grid-cols-4">
                                <div class="col-span-4 md:col-span-2">
                                    <p><span class="text-grey-2">{{infoLabel1}}</span>
                                         {{infoText1}}</p>
                                    <p><span class="text-grey-2">{{infoLabel2}}</span>
                                          {{infoText2}}</p>
                                </div>
                                <div class="col-span-4 md:col-span-2">
                                    <p><span class="text-grey-2">{{infoLabel3}}</span>
                                           {{infoText3}}</p>
                                    <p><span class="text-grey-2">{{infoLabel4}}</span>
                                           {{infoText4}}</p>
                                    <p><span class="text-grey-2">{{infoLabel5}}</span>
                                        {{infoText5}}</p>
                                </div>
                            </div>
</div>
`,
  styleUrls: ['./button.css'],
})
export default class TableCardComponent {
  /**
   * Is this the principal call to action on the page?
   */
  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  @Input()
  header = 'Tabele card';
  @Input()
  infoLabel1 = 'infoLabel1';
  @Input()
  infoText1 = 'infoText1';

  @Input()
  infoLabel2 = 'infoLabel2';
  @Input()
  infoText2 = 'infoText2';

  @Input()
  infoLabel3 = 'infoLabel3';
  @Input()
  infoText3 = 'infoText3';

  @Input()
  infoLabel4 = 'infoLabel4';
  @Input()
  infoText4 = 'infoText4';

  @Input()
  infoLabel5 = 'infoText5';
  @Input()
  infoText5 = 'infoText5';


  public get classes(): string[] {
    const mode = 'storybook-tableCard';
    return ['storybook-tableCard', mode];
  }
}
