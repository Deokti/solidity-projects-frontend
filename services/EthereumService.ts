import { MetamaskService } from "./MetamaskService";
import { Web3Provider } from "@ethersproject/providers";

export class EthereumService {
  private metamaskService: MetamaskService | null;
  private ethereum: any;

  constructor() {
    this.metamaskService = new MetamaskService();

    if (this.metamaskService.isMetamask) {
      this.ethereum = new Web3Provider(window.ethereum);
    }
  }

  async connect(): Promise<void> {
    try {
      const request = await this.ethereum.send("eth_requestAccounts", []);
      console.log(request);
    } catch (error: any) {
      if (error.code === 4001) {
        console.log("[EthereumService] Please connect to MetaMask.");
      } else {
        console.error(error);
      }
    }
  }
}

if (typeof window !== "undefined") {
  window.ethereumService = new EthereumService();
}
