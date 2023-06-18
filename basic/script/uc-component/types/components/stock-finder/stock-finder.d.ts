import { EventEmitter } from "../../stencil-public-runtime";
export declare class StockFinder {
  stockNameInput: HTMLInputElement;
  searchResults: {
    name: string;
    symbol: string;
  }[];
  loading: boolean;
  ucSymbolSelected: EventEmitter<string>;
  onFindStock(event: Event): void;
  onSelectSymbol(symbol: string): void;
  onFetch(stockSymbol: string): void;
  render(): any[];
}
