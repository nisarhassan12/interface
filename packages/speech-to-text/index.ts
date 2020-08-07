import speech from '@google-cloud/speech';

export const transcribeAudio = async (
  gcsUri: string
): Promise<string> => {
  const client = new speech.SpeechClient();

  const encoding = 'Encoding of the audio file, e.g. LINEAR16';
  const sampleRateHertz = 16000;
  const languageCode = 'BCP-47 language code, e.g. en-US';

  const config = {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  };
  const audio = {
    uri: gcsUri,
  };

  const request = {
    config: config,
    audio: audio,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log('Transcription: ', transcription);

  return 'true';
};
