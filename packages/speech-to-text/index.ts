import speech from '@google-cloud/speech';

export const transcribeAudio = async (
  audioFilename: string
): Promise<string> => {
  const client = new speech.SpeechClient();

};
