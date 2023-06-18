export declare class StockPrice {
  stockInput: HTMLInputElement;
  el: HTMLElement;
  fetchedPrice: number;
  stockSymbolValue: string;
  isStockInputValid: boolean;
  error: string;
  loading: boolean;
  stockSymbol: string;
  stockSymbolChanged(newValue: string, oldValue: string): void;
  onStockValueChange(event: Event): void;
  onFetchStockPrice(e: Event): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentWillUpdate(): void;
  componentDidUpdate(): void;
  disconnectedCallback(): void;
  onStockSymbolSelected(event: CustomEvent): void;
  fetchStockPrice(stockSymbol: string): void;
  hostData(): {
    class: string;
  };
  render(): any[];
}
