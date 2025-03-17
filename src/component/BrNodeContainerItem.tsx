import { ContainerItem, TYPE_CONTAINER_ITEM_UNDEFINED } from '@bloomreach/spa-sdk';
import { BrContainerItemUndefined } from '../cms';
import { BrNodeComponent } from './BrNodeComponent';
import { BrProps } from './BrProps';

export class BrNodeContainerItem extends BrNodeComponent<ContainerItem> {
  constructor(props: BrProps<ContainerItem>) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount(): void {
    this.props.component?.on('update', this.onUpdate);
  }

  componentDidUpdate(prevProps: BrProps<ContainerItem>): void {
    if (this.props.component !== prevProps.component) {
      prevProps.component?.off('update', this.onUpdate);
      this.props.component?.on('update', this.onUpdate);
    }
  }

  componentWillUnmount(): void {
    this.props.component?.off('update', this.onUpdate);
  }

  protected getMapping(): React.ComponentType<BrProps> {
    const type = this.props.component?.getType();

    if (type && type in this.context) {
      return this.context[type] as React.ComponentType<BrProps>;
    }

    return (
      (this.context[TYPE_CONTAINER_ITEM_UNDEFINED as any] as React.ComponentType<BrProps>) ?? BrContainerItemUndefined
    );
  }

  protected onUpdate(): void {
    this.forceUpdate(() => this.props.page?.sync());
  }
}