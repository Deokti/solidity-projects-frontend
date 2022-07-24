export class MetamaskService {
  get isMetamask(): boolean {
    return this._isMetamask();
  }

  private _isMetamask(): boolean {
    if (typeof window.ethereum === "undefined") {
      new Error("[MetamaskService] MetaMask not installed!");
      return false;
    }

    return true;
  }
}
