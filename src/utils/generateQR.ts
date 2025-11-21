import QRCode from "qrcode";

export const generateQR = async (payload: any): Promise<string> => {
  try {
    return await QRCode.toDataURL(JSON.stringify(payload)); 
  } catch (error) {
    throw new Error("Gagal membuat QR Code");
  }
};
