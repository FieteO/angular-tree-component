import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  selector: 'tree-node-expander',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <button
        *ngIf="node.hasChildren"
        [class.toggle-children-wrapper-expanded]="node.isExpanded"
        [class.toggle-children-wrapper-collapsed]="node.isCollapsed"
        [attr.aria-label]="node.isCollapsed ? 'expand' : 'collapse'"
        class="toggle-children-wrapper btn-invisible"
        (click)="node.mouseAction('expanderClick', $event)"
      >
        <span class="toggle-children" role="none"></span>
      </button>
      <span *ngIf="!node.hasChildren" class="toggle-children-placeholder">
      </span>
    </ng-container>
  `
})
export class TreeNodeExpanderComponent {
  @Input() node: TreeNode;
}
