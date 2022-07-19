import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-documentation',
  templateUrl: './pipes-documentation.component.html',
  styleUrls: ['./pipes-documentation.component.scss']
})
export class PipesDocumentationComponent {
  public text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore dolorum id ipsum non omnis ratione. At\n' +
    '    blanditiis corporis dolore doloribus error eveniet, ex, laudantium nemo nisi nostrum omnis quasi repellat\n' +
    '    reprehenderit temporibus voluptatum. Ad adipisci alias, animi assumenda beatae cumque cupiditate delectus distinctio\n' +
    '    est excepturi expedita incidunt inventore maxime molestias non officia praesentium qui quidem quo repudiandae soluta\n' +
    '    veniam veritatis vero voluptas voluptatum? Accusamus consequuntur earum, error ipsum laudantium quam quis tempore\n' +
    '    voluptatum? Ab aut consectetur cupiditate debitis, deleniti dignissimos eligendi et ex facere facilis fuga fugiat\n' +
    '    iusto molestias neque nobis non obcaecati odit officiis omnis pariatur porro praesentium quam quia quidem, ratione\n' +
    '    reiciendis sunt. Architecto blanditiis cumque dignissimos dolore dolores fugit in incidunt ipsam ipsum maxime modi\n' +
    '    natus necessitatibus, perspiciatis praesentium quae quaerat quam quibusdam quod repudiandae rerum sed suscipit\n' +
    '    tempora voluptatem? Ab blanditiis distinctio ducimus harum in ipsam, iusto libero optio porro possimus quaerat qui\n' +
    '    recusandae sunt';

  public flattenData = [1, 2, 3, 5, [5], [4, [5, 6, 7]]];
  public stringArray: string[] = ['Courses', 'YouTube', 'Twitter', 'LinkedIn'];
  public objectArray: { [key: string]: string }[] = [
    { content: 'Courses' },
    { content: 'YouTube' },
    { content: 'Twitter' },
    { content: 'LinkedIn' }
  ];

  public html =
    '<a href="https://www.YouTube.com/Codingtutorials360" target="blank">YouTube </a>';

  modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
