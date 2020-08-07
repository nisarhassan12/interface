import speech from '@google-cloud/speech';

export const transcribeAudio = async (
  gcsUri: string
): Promise<string> => {
  const client = new speech.SpeechClient();

  const sampleRateHertz = 16000;
  const languageCode = 'en-US';

  const config = {
    languageCode: languageCode,
    sampleRateHertz: sampleRateHertz,
  };
  const audio = {
    uri: gcsUri,
  };

  const request = {
    audio,
    config,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log('Transcription: ', transcription);

  return 'true';
};
