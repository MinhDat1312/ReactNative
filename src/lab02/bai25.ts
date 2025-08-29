export async function downloadFile(fileName: string): Promise<void> {
    console.log(`Starting download: ${fileName}...`);

    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });

    console.log(`Download complete: ${fileName}`);
}