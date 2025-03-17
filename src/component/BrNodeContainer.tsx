import {
    Container,
    TYPE_CONTAINER_INLINE,
    TYPE_CONTAINER_NO_MARKUP,
    TYPE_CONTAINER_ORDERED_LIST,
    TYPE_CONTAINER_UNORDERED_LIST,
} from '@bloomreach/spa-sdk';
import { BrNodeComponent } from './BrNodeComponent';
import { BrProps } from './BrProps';
import {
  BrContainerBox,
  BrContainerInline,
  BrContainerNoMarkup,
  BrContainerOrderedList,
  BrContainerUnorderedList,
} from '../cms';

export class BrNodeContainer extends BrNodeComponent<Container> {
  protected getMapping(): React.ComponentType<BrProps> {
    const type = this.props.component?.getType();

    if (type && type in this.context) {
      return this.context[type] as React.ComponentType<BrProps>;
    }

    switch (type) {
      case TYPE_CONTAINER_INLINE:
        return BrContainerInline;
      case TYPE_CONTAINER_NO_MARKUP:
        return BrContainerNoMarkup;
      case TYPE_CONTAINER_ORDERED_LIST:
        return BrContainerOrderedList;
      case TYPE_CONTAINER_UNORDERED_LIST:
        return BrContainerUnorderedList;
      default:
        return BrContainerBox;
    }
  }
}